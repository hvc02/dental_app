import React from "react";

export const HeroHeading = ({ content }) => (
  <h1 className="hero-heading">{content}</h1>
);

export const PrimaryHeading = ({ content }) => (
  <h1 className="heading heading-primary">{content}</h1>
);

export const SecondaryHeading = ({ content, color }) => (
  <h2 className={`heading heading-secondary ${color ? "color-cta" : ""}`}>
    {content}
  </h2>
);
