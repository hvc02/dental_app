import { FlagIcon } from "@/components/SVGs";
import { Paragraph, PrimaryHeading } from "@/components/Typography";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="section about-section half-bottom dark">
      <div className="shadow-line"></div>
      <div className="container">
        <div className="page-title bottom-space">
          <FlagIcon />
          <br />
          <PrimaryHeading content={"Meet the Founder"} />
        </div>
        <div className="side-text-info center"></div>
        <div className="vertical-flex">
          <div className="container-1000px backstory">
            <div className="founder-image-wrapper">
              <img
                src="https://res.cloudinary.com/dfnfsnzqky/image/upload/v1696777498/pexels-karolina-grabowska-6627836_puvsvz.jpg"
                alt=""
                className="founder-image"
              />
            </div>
            <p className="founder-caption">Dr Puneet Arora</p>
            <p>Hello,</p>
            <p>
              Dr Puneet Arora grew up in India where he received his initial
              dental education completing his doctorate in 2008. Then he moved
              to the U.S. to attend the prestigious Boston University Henry M
              Goldman School of Dental Medicine, to further hone and develop his
              skills in general, restorative and aesthetic dentistry and
              graduated Magna Cum Laude.
            </p>
            {/* <p>
              Dr. Arora has been practicing all aspects of restorative,
              prosthodontic, endodontic and surgical dentistry including wisdom
              teeth extraction for almost 15 years. He has practiced in India,
              Canada and USA and is now well settled in Massachusetts. He firmly
              believes in expanding his skills through continuing education and
              is a certified Invisalign provider. Dr. Arora is currently
              practicing in Framingham, MA and is proud to be a part of this
              loving community.
            </p> */}

            <p>
              Dr. Arora has been practicing all aspects of restorative,
              prosthodontic, endodontic and surgical dentistry including wisdom
              teeth extraction for almost 15 years. He has practiced in India,
              Canada and USA and is now well settled in Massachusetts. He firmly
              believes in expanding his skills through continuing education and
              is a certified Invisalign provider. Dr. Arora is currently
              practicing in Framingham, MA and is proud to be a part of this
              loving community.
            </p>

            <p>
              Dr. Arora is a member of the American Dental Association and the
              Massachusetts Dental Society. In his free time he enjoys cooking
              and travelling.
            </p>
          </div>
          {/* <div className="teams-wrapper w-dyn-list">
            <div className="grid-list w-dyn-items">
              <div className="team-member-grid locations w-dyn-item">
                <div
                  className="team-member-photo about"
                  id="team-member-photo"
                ></div>
                <div
                  className="team-member-text-wrap about"
                  id="team-member-content"
                >
                  <PrimaryHeading content="Dr. Puneet Arora" />

                  <Paragraph
                    content={
                      "Grew up in India where he received his initial dental education completing his doctorate in 2008. Then he moved to the U.S. to attend the prestigious Boston University Henry M Goldman School of Dental Medicine, to further hone and develop his skills in general, restorative and aesthetic dentistry and graduated Magna Cum Laude."
                    }
                  />
                  <Paragraph
                    content={
                      "Dr.  Arora has been practicing all aspects of restorative, prosthodontic, endodontic and surgical dentistry including wisdom teeth extraction for almost 15 years. He has practiced in India, Canada and USA and is now well settled in Massachusetts. He firmly believes in expanding his skills through continuing education and is a certified Invisalign provider. Dr. Arora is currently practicing in Framingham, MA and is proud to be a part of this loving community."
                    }
                  />
                  <Paragraph
                    content={
                      "Dr. Arora truly enjoys the opportunity to treat his patients and prides himself on providing the best dental care possible using state of the art materials and techniques. He strives to make each one of his patients feel comfortable, informed and included in all treatment options. "
                    }
                  />
                  <Paragraph
                    content={
                      "Dr. Arora is a member of the American Dental Association and the Massachusetts Dental Society. In his free time he enjoys cooking and gardening."
                    }
                  />
                </div>
              </div>

              <div className="team-member-grid locations w-dyn-item">
                <div
                  className="team-member-photo about"
                  id="team-member-photo"
                ></div>
                <div
                  className="team-member-text-wrap about"
                  id="team-member-content"
                >
                  <PrimaryHeading content="Dr. Harivansh Chanda" />
                  <Paragraph content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fugit delectus optio doloremque recusandae excepturi at reiciendis? Minus ipsa eaque, amet repudiandae, quisquam dolorum, repellendus corporis deleniti qui error itaque?" />
                </div>
              </div>

              <div className="team-member-grid locations w-dyn-item">
                <div
                  className="team-member-photo about"
                  id="team-member-photo"
                ></div>
                <div
                  className="team-member-text-wrap about"
                  id="team-member-content"
                >
                  <PrimaryHeading content="Dr. Harivansh Chanda" />
                  <Paragraph content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fugit delectus optio doloremque recusandae excepturi at reiciendis? Minus ipsa eaque, amet repudiandae, quisquam dolorum, repellendus corporis deleniti qui error itaque?" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
