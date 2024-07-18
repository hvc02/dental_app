import React from "react";
import { StarsIcon } from "@/components/SVGs";
import { HeroHeading, HeroParagraph } from "@/components/Typography";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <main className="section hero-section wf-section">
      <div className="container">
        <div className="w-layout-grid hero-flex">
          <div className="small-intro">
            <StarsIcon />
            <HeroHeading content="Seeing the dentist just got cooler" />
            <HeroParagraph content="At Phoenix, experience the best of dentistry and perfect your smile. Visit our nearest location." />
            <div className="button-wrapper">
              <Button
                text="Schedule Now"
                href="https://phx.identalcloud.com/PhoenixDental/Patient/_practice/1/Appointment"
              />
            </div>
          </div>

          <div className="hero-video-wrap homepage">
            <div className="absolute">
              <div className="background-video w-background-video">
                <video
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dfnfszqky/image/upload/v1696700187/61d45cc9e517d208e528b4e7_Swish_Video-poster-00001_lmqrqa.jpg)",
                  }}
                  autoPlay
                  muted
                  src="https://res.cloudinary.com/dfnfszqky/video/upload/v1696700164/pexels-c-technical-6502168_2160p_ijhyky.mp4"
                >
                  <source src="https://res.cloudinary.com/dfnfszqky/video/upload/v1696700164/pexels-c-technical-6502168_2160p_ijhyky.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
