'use client'
import React from 'react'
import { PrimaryHeading, Paragraph } from '@/components/Typography'
import { HappyFaceIcon } from '@/components/SVGs'
import TestimonialCard from '@/components/TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ReviewSection = () => {

    const testimonies = [
        {
            content: "Thank you for a great experience as a new patient! Everyone was very friendly, supportive and proffesional. Everything was very modern, efficient and painless. There is a commitment to healthy and holistic treatment - at an affordable price.",
            reviewer: "Victoria H"
        },
        {
            content: "Thank you for a great experience as a new patient! Everyone was very friendly, supportive and proffesional. Everything was very modern, efficient and painless. There is a commitment to healthy and holistic treatment - at an affordable price.",
            reviewer: "Victoria H"
        }
        , {
            content: "Thank you for a great experience as a new patient! Everyone was very friendly, supportive and proffesional. Everything was very modern, efficient and painless. There is a commitment to healthy and holistic treatment - at an affordable price.",
            reviewer: "Victoria H"
        }, {
            content: "Thank you for a great experience as a new patient! Everyone was very friendly, supportive and proffesional. Everything was very modern, efficient and painless. There is a commitment to healthy and holistic treatment - at an affordable price.",
            reviewer: "Victoria H"
        }, {
            content: "Thank you for a great experience as a new patient! Everyone was very friendly, supportive and proffesional. Everything was very modern, efficient and painless. There is a commitment to healthy and holistic treatment - at an affordable price.",
            reviewer: "Victoria H"
        }, {
            content: "Thank you for a great experience as a new patient! Everyone was very friendly, supportive and proffesional. Everything was very modern, efficient and painless. There is a commitment to healthy and holistic treatment - at an affordable price.",
            reviewer: "Victoria H"
        }, {
            content: "Thank you for a great experience as a new patient! Everyone was very friendly, supportive and proffesional. Everything was very modern, efficient and painless. There is a commitment to healthy and holistic treatment - at an affordable price.",
            reviewer: "Victoria H"
        }
    ]
    return (
        <div className='section half-bottom section-team'>
            <div className="container">
                <div className="vertical-flex">
                    <div className="team-content-wrapper page-title bottom-space">
                        <span className="icon-wrapper">
                            <HappyFaceIcon />
                        </span>
                        <PrimaryHeading content="You are in Good company" />
                        <Paragraph content="10,000 5-star reviews in Austin, TX and counting..." className="400_max" />
                    </div>
                </div>
                <Swiper

                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper">
                    {testimonies.map((testimony, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="slide-content-wrapper" key={index}>
                                    < TestimonialCard content={testimony.content} reviewer={testimony.reviewer} key={index} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}


export default ReviewSection