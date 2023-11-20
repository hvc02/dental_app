"use client";
import React from "react";
import { PrimaryHeading, Paragraph } from "@/components/Typography";
import { HappyFaceIcon } from "@/components/SVGs";
import TestimonialCard from "@/components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import testimonies from "app/utils/testimonies";
import "swiper/css";
import "swiper/css/navigation";

const ReviewSection = () => {
  return (
    <div className="section half-bottom section-team">
      <div className="container">
        <div className="vertical-flex">
          <div className="team-content-wrapper page-title bottom-space">
            <span className="icon-wrapper">
              <HappyFaceIcon />
            </span>
            <PrimaryHeading content="You are in Good company" />
            <Paragraph
              content="10,000 5-star reviews in Framingham, MA and counting..."
              className="400_max"
            />
          </div>
        </div>
        <Swiper
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {testimonies.map((testimony, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="slide-content-wrapper" key={index}>
                  <TestimonialCard
                    content={testimony.content}
                    reviewer={testimony.reviewer}
                    key={index}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
