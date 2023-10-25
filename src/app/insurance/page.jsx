import { ThumbsIcon } from "@/components/SVGs";
import { Paragraph, PrimaryHeading } from "@/components/Typography";
import React from "react";

const InsurancePage = () => {
  return (
    <div className="section half-bottom">
      <div className="container insurance">
        <div className="side-text-info center">
          <div className="header-section _700">
            <ThumbsIcon />
            <PrimaryHeading content="Insurance" />
            <Paragraph content="Phoenix Dental accepts most dental insurance plans. That said, let's be sure you are covered. Please fill out the form below—it only takes a few seconds:" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;
