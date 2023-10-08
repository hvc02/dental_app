import React from "react";
import { PrimaryHeading } from "@/components/Typography";

const Services = () => {
  return (
    <div className="section half-bottom services-section">
      <div className="container">
        <div className="w-layout-grid grid">
          <div className="image-div mouthwash" id="services-image-div"></div>
          <div
            className="spaced-div mouthwash"
            id="our-services-content-div"
            style={{ marginTop: "30px" }}
          >
            <PrimaryHeading content="Our Services" />
            <ul className="phoenix-list">
              <li className="phoenix-list-item">
                <p>

                  general & family dentistry
                </p>
              </li>
              <li className="phoenix-list-item"><p>invisalign</p></li>
              <li className="phoenix-list-item">
                <p>cosmetic dentistry</p>
              </li>
              <li className="phoenix-list-item">
                <p>teeth whitening</p>
              </li>
              <li className="phoenix-list-item">
                <p>specialty & oral surgery</p>
              </li>
              <li className="phoenix-list-item">
                <p>dental emergencies</p>
              </li>
              <li className="phoenix-list-item">
                <p>sleep apnea</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
