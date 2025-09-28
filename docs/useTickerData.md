### useTickerData

Real-time market data React hook that subscribes to a Pusher channel for a security and returns a normalized object with the latest price, NAV, instrument type, dollar and percent price change, and optional today’s gain for a position.

This hook handles connecting, subscribing, parsing incoming events, computing derived values, and cleanup on unmount.

---

### Features

- Real-time subscription via Pusher channels
- Returns price, NAV, instrument `type` (stock, etf, cryptocurrency)
- Computes price change: absolute dollars and percent vs prior close
- Computes today’s gain for a position when `quantity` is provided
- Connection lifecycle: idle → connecting → subscribed → error
- Safe cleanup on unmount; guards for SSR
- Optional throttling to reduce render frequency

---

### Installation prerequisites

- A configured Pusher client (browser) with an app key and cluster.
- A backend (or third-party feed) that publishes events to a channel per security, e.g. `ticker-AAPL`, `ticker-BTCUSD`.
- Event payloads should include at least the latest `price` and `previousClose` (or a direct `change`), and optionally `nav`.

Example event payloads (illustrative):

```json
{
  "symbol": "AAPL",
  "price": 232.41,
  "previousClose": 229.77,
  "nav": null,
  "type": "stock",
  "ts": 1738085400000
}
```

---

### API

```ts
type InstrumentType = 'stock' | 'etf' | 'cryptocurrency';

type TickerData = {
  price: number | null;
  nav: number | null;
  type: InstrumentType | null;
  change: {
    absolute: number | null; // price - previousClose
    percent: number | null;  // (absolute / previousClose) * 100
  };
  todaysGain: {
    absolute: number | null; // change.absolute * quantity (if provided) else change.absolute
    percent: number | null;  // same as change.percent
  };
  isLive: boolean;            // true once first live event received
  lastUpdate: Date | null;    // timestamp of the most recent applied event
  status: 'idle' | 'connecting' | 'subscribed' | 'error';
  error?: Error;
};

type UseTickerDataOptions = {
  symbol: string;                 // e.g. 'AAPL', 'SPY', 'BTCUSD'
  type?: InstrumentType;          // used if feed does not specify type
  exchange?: string;              // optional, if needed for channel naming
  quantity?: number;              // position size used to compute todaysGain.absolute
  initialData?: Partial<TickerData>;
  throttleMs?: number;            // min ms between state updates
  autoSubscribe?: boolean;        // default true
  pusherKey?: string;             // if not using a preconfigured client
  cluster?: string;               // pusher cluster
  channelName?: string;           // override channel name format
  pusherClient?: unknown;         // injected Pusher instance (preferred)
};

declare function useTickerData(options: UseTickerDataOptions): TickerData & {
  subscribe: () => void;
  unsubscribe: () => void;
  reset: () => void;              // clears to initialData / nulls
};
```

---

### Channel and events

- Default channel name: `ticker-{symbol}` (override via `channelName`)
- Common event names (examples; align these with your feed):
  - `price-update`: carries `price`, `previousClose` (or `changeAbs`/`changePct`), optional `type`
  - `nav-update`: carries `nav`
  - `ticker-snapshot`: initial snapshot with `price`, `nav`, `previousClose`, `type`
  - `status`: connectivity/market status messages
  - `heartbeat`: can be ignored or used to mark `isLive`

The hook merges fields from incoming events, recalculates `change` and `todaysGain`, and updates `lastUpdate` per event timestamp (or `Date.now()` if missing).

---

### Derived value calculations

- If `previousClose` is available from snapshot or events:
  - `change.absolute = price - previousClose`
  - `change.percent = previousClose ? (change.absolute / previousClose) * 100 : null`
- If feed provides `changeAbs`/`changePct`, those will be used directly.
- `todaysGain.absolute = quantity ? change.absolute * quantity : change.absolute`
- `todaysGain.percent = change.percent`
- If required inputs are missing, the corresponding values are `null`.

---

### Usage examples

Basic subscription:

```tsx
import { useTickerData } from '@/hooks/useTickerData';

export function QuoteCard() {
  const { price, type, change, todaysGain, status, error } = useTickerData({
    symbol: 'AAPL',
    type: 'stock'
  });

  if (error) return <div>Failed to load: {error.message}</div>;
  if (status !== 'subscribed') return <div>Loading...</div>;

  return (
    <div>
      <div>Type: {type}</div>
      <div>Price: {price?.toFixed(2)}</div>
      <div>
        Change: {change.absolute?.toFixed(2)} ({change.percent?.toFixed(2)}%)
      </div>
      <div>
        Today\'s Gain: {todaysGain.absolute?.toFixed(2)} ({todaysGain.percent?.toFixed(2)}%)
      </div>
    </div>
  );
}
```

With position `quantity` (computes today’s PnL):

```tsx
const data = useTickerData({ symbol: 'SPY', type: 'etf', quantity: 25 });
// todaysGain.absolute reflects position-level PnL for the day
```

Custom channel and throttling:

```tsx
useTickerData({
  symbol: 'BTCUSD',
  type: 'cryptocurrency',
  channelName: 'crypto-BTCUSD',
  throttleMs: 250
});
```

Injecting a Pusher client instance (recommended):

```tsx
const pusher = useMemo(() => new Pusher(APP_KEY, { cluster: CLUSTER }), []);
const data = useTickerData({ symbol: 'AAPL', pusherClient: pusher });
```

Multiple tickers (lists):

```tsx
const symbols = ['AAPL', 'MSFT', 'GOOG'];
return (
  <ul>
    {symbols.map(s => {
      const d = useTickerData({ symbol: s, type: 'stock', throttleMs: 200 });
      return (
        <li key={s}>
          {s}: {d.price?.toFixed(2)} ({d.change.percent?.toFixed(2)}%)
        </li>
      );
    })}
  </ul>
);
```

SSR guard (Next.js):

```tsx
const isClient = typeof window !== 'undefined';
const data = isClient ? useTickerData({ symbol: 'AAPL' }) : null;
```

---

### Lifecycle and cleanup

- When `autoSubscribe` is true (default), the hook connects and subscribes immediately after mount.
- On unmount, it unsubscribes and detaches all event handlers to prevent leaks.
- Calling `unsubscribe()` manually stops updates until `subscribe()` is called.
- `reset()` clears current values to `initialData` or nulls.

---

### Configuration tips

- Prefer injecting a shared `pusherClient` to avoid multiple connections.
- Use `throttleMs` for highly volatile tickers to reduce renders.
- If your backend uses a different channel/event schema, supply `channelName` and map events in your hook implementation accordingly.

---

### Error handling

- Network or auth issues set `status` to `error` and populate `error`.
- The hook remains mounted; you can retry by calling `subscribe()` or remounting.

---

### Testing

- Abstract the Pusher client behind an interface so you can inject a mock.
- Emit fake `price-update`/`nav-update`/`ticker-snapshot` events and assert computed `change` and `todaysGain`.
- Use fake timers to test `throttleMs` behavior.

---

### Notes on instrument type

- If the feed provides `type`, it is used as-is; otherwise the optional `type` parameter is applied.
- Valid values: `stock`, `etf`, `cryptocurrency`.

---

### FAQ

- Why is `todaysGain` equal to `change` sometimes?
  - If `quantity` is not provided, today’s gain is computed on a single unit and equals the price change.

- What if `previousClose` is unknown?
  - Percent change cannot be computed reliably; `change.percent` will be `null`. If your feed provides `changePct`, the hook will prefer it.

- Does the hook debounce or batch updates?
  - It can throttle via `throttleMs`. React will also batch state updates within the same tick.

---

### Quick reference

- Input: `{ symbol, type?, quantity?, throttleMs?, channelName?, pusherClient? }`
- Output fields:
  - `price`, `nav`, `type`
  - `change.absolute`, `change.percent`
  - `todaysGain.absolute`, `todaysGain.percent`
  - `isLive`, `lastUpdate`, `status`, `error?`
  - `subscribe()`, `unsubscribe()`, `reset()`

