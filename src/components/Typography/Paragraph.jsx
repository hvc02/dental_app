import React from "react";

export const Paragraph = ({ content, className }) => (
  <p className={`text ${className ?? ""}`}>{content}</p>
);

export const MediumParagraph = ({ content }) => (
  <p className="text text-medium">{content}</p>
);

export const LargeParagraph = ({ content, style }) => (
  <p className="text text-large" style={style}>
    {content}
  </p>
);

export const HeroParagraph = ({ content }) => (
  <p className="text text-hero">{content}</p>
);

export const SmallParagraph = ({ content }) => (
  <p className="text text-small">{content}</p>
);

export const AccordionParagraph = ({ content, style, className }) => (
  <p className={`text text-accordion ${className ?? ""}`} style={style}>
    {content}
  </p>
);
