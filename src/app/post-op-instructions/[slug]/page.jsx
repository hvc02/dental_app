"use client";

import React from "react";
import { Paragraph, PrimaryHeading } from "@/components/Typography";
import opData from "app/utils/op-data";
import PostOpSlider from "@/components/PostOpSlider";
import Spacer from "@/components/Spacer";
import { usePathname } from "next/navigation";

const OPPage = () => {
  const pathname = usePathname();
  const opName = pathname?.split("/")[2];

  return (
    <div className="section half-bottom contact-section dark">
      <div className="container post-op">
        <div className="width_900">
          {/* <ThumbsIcon /> */}
          <div>
            <div className="flex justify-center">
              <PrimaryHeading content={opData[opName]?.title} />
            </div>
            <PostOpSlider />
            <Spacer variant="large" />
            <div className="flex justify-center">
              <Paragraph content={opData[opName]?.content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OPPage;
