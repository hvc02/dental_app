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
          <PrimaryHeading content={"Meet the Phoenix team"} />
        </div>
        <div className="side-text-info center"></div>
        <div className="vertical-flex">
          <div className="teams-wrapper w-dyn-list">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
