import React from "react";
import { Paragraph, PrimaryHeading } from "@/components/Typography";
import { QuoteIcon } from "@/components/SVGs";

const TestimonialCard = ({ content, reviewer }) => {
  return (
    <div className="testimonial-card">
      {/* <img src="" alt="" className="testimonial-quote" /> */}
      <QuoteIcon className="testimonial-quote" />
      <Paragraph content={content} />
      <Paragraph content={`-${reviewer}`} />
    </div>
  );
};

export default TestimonialCard;
