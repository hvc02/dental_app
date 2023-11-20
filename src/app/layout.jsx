import Navbar from "@/components/Navbar";
import "./globals.css";
import "@/styles/index.scss";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Phoenix Dental",
  description: "Dental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
