"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PostOpSlider = () => {
  return (
    <div className="post-op-slider-container">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="post-op-slider"
      >
        <SwiperSlide>
          <div>
            <img
              src="https://res.cloudinary.com/dfnfszqky/image/upload/v1700478115/pexels-photo-3762402_jcyrby.jpg"
              alt="teeth-white-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dfnfszqky/image/upload/v1700477977/pexels-photo-5622014_ytvrtv.jpg"
            alt="teeth-white-image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dfnfszqky/image/upload/v1700477973/pexels-photo-5622271_xrytk5.jpg"
            alt="teeth-white-image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dfnfszqky/image/upload/v1700477975/pexels-photo-6627288_fvhpaw.jpg"
            alt="teeth-white-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PostOpSlider;
