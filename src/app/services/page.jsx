import React from "react";
import {
  HeroHeading,
  Paragraph,
  PrimaryHeading,
} from "@/components/Typography";
import { StarsIcon } from "@/components/SVGs";
import { dentalServices } from "app/utils/copy";

const ServicesPage = () => {
  return (
    <>
      <main className="hero-section no-space wf-section">
        <div className="container">
          <div className="w-layout-grid hero-flex">
            <div className="small-intro big-margins">
              <StarsIcon />
              <HeroHeading content={"Services"} />
              <Paragraph
                content={
                  <>
                    From general dentistry wellness, to perfecting cosmetic
                    imperfections, to restoring implants and filings, to those
                    painful oral emergencies—Swish has you covered. <br />{" "}
                    <br />
                    All of our locations offer comprehensive services, with
                    compassionate care, at transparent pricing and need.
                  </>
                }
              />
            </div>
            <div className="hero-video-wrap big-image"></div>
          </div>
        </div>
      </main>

      <div className="section wf-section">
        <div className="container">
          <div className="vertical-flex">
            <div className="teams-wrapper w-dyn-list">
              <div className="grid-list w-dyn-items">
                {dentalServices.map((service, index) => (
                  <div
                    className="team-member-grid locations w-dyn-item"
                    key={index}
                  >
                    <div
                      className="team-member-photo locations"
                      id="service-photo"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    ></div>
                    <div
                      className="team-member-text-wrap location"
                      id="service-content"
                    >
                      <PrimaryHeading content={service.name} />
                      <Paragraph content={service.description} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
