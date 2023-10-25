import React from "react";
import { PrimaryHeading } from "@/components/Typography";

const WhyPhoenix = () => {
  return (
    <div className="section half-bottom services-section why-section dark">
      <div className="container">
        <div className="grid">
          <div className="image-div floss"></div>
          <div
            className="spaced-div services-content"
            style={{ marginTop: "30px" }}
          >
            <PrimaryHeading content="Our Services" />
            <ul className="phoenix-list">
              <li className="phoenix-list-item">
                <p>Highest-rated dentistry in Framingham, MA</p>
              </li>
              <li className="phoenix-list-item">
                <p>Clean, comfortable, and modern studios</p>
              </li>
              <li className="phoenix-list-item">
                <p>Transparent care and pricing</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPhoenix;
