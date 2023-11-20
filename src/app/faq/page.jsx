import React from "react";
import { ThumbsIcon } from "@/components/SVGs";
import { PrimaryHeading } from "@/components/Typography";
import Spacer from "@/components/Spacer";
import Accordion from "@/components/Accordion";
import faqs from "app/utils/faq-data";

const FAQ = () => {
  return (
    <div className="section half-bottom dark">
      <div className="container insurance">
        <div className="side-text-info center">
          <div className="header-section _700">
            <ThumbsIcon />
            <Spacer />
            <PrimaryHeading content="Frequently asked questions (FAQ)" />
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.title} text={faq.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
