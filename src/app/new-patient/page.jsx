import Button from "@/components/Button";
import { ThumbsIcon } from "@/components/SVGs";
import { Paragraph, PrimaryHeading } from "@/components/Typography";
import React from "react";

const NewPatientPage = () => {
  return (
    <>
      {/* <div className="section half-bottom">
        <div className="container insurance">
          <div className="side-text-info center">
            <div className="header-section _700">
              <ThumbsIcon />
              <PrimaryHeading content="Insurance" />
              <Paragraph content="Phoenix Dental accepts most dental insurance plans. That said, let's be sure you are covered. Please fill out the form below—it only takes a few seconds:" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="section half-bottom dark">
        <div className="container new-patient">
          <div className="side-text-info center">
            <div className="header-section _700">
              <div>
                <ThumbsIcon />
                <PrimaryHeading content="New Patient" />
                <div
                  class="new-patient-image-div image-div"
                  id="new-patient-image-div"
                ></div>
                {/* <Paragraph content="Phoenix Dental accepts most dental insurance plans. That said, let's be sure you are covered. Please fill out the form below—it only takes a few seconds:" /> */}
                {/* Your Initial appointment will consist of an examination and review of your treatment options. usually treatment can be done or started the same day as the consultation. However, a complex medical history or treatment plan will require an evaluation and a second appointment to provide treatment on another day */}
                <Paragraph
                  className={"text-align-left"}
                  content="Your first visit to Phoenix Dental establishes a vital foundation for our relationship with you. During the first visit, we make sure to obtain important background information and give you time to get to know your dentist. To understand what to expect for your first visit to our practice, please read through this page."
                />
                <Paragraph
                  className={"text-align-left"}
                  content="Your Initial appointment will consist of an examination and review of your treatment options. usually treatment can be done or started the same day as the consultation. However, a complex medical history or treatment plan will require an evaluation and a second appointment to provide treatment on another day"
                />

                <Paragraph
                  className={"text-align-left color-cta"}
                  content="Please assist us by providing the following information at the time of your consultation:"
                />
                <ul>
                  <li>
                    <Paragraph
                      className={"text-align-left"}
                      content="Any x-rays taken by a previous dentist, if applicable."
                    />
                  </li>

                  <li>
                    <Paragraph
                      className={"text-align-left"}
                      content="A list of medications you are presently taking."
                    />
                  </li>

                  <li>
                    <Paragraph
                      className={"text-align-left"}
                      content="If you have dental insurance, bring the necessary completed forms. This will save time and allow us to help you process any claims."
                    />
                  </li>
                </ul>

                <Paragraph
                  className={"text-align-left"}
                  content={
                    <>
                      {" "}
                      <span className="color-cta"> IMPORTANT</span>: All
                      patients under the age of 18 must be accompanied by a
                      parent or guardian at the consultation visit.
                    </>
                  }
                />
                <Paragraph
                  className={"text-align-left"}
                  content={
                    "Please alert the office if you have a medical condition that may be of concern prior to treatment (i.e., diabetes, high blood pressure, artificial heart valves and joints, rheumatic fever, etc.) or if you are currently taking any medication (i.e., heart medications, aspirin, anticoagulant therapy, etc.)."
                  }
                />

                <Paragraph
                  className={"text-align-left"}
                  content={
                    "Radiographs (X-rays): If your dentist or physician has taken x-rays, you may request that they forward them to our office. If there is not enough time, please pick them up and bring them to our office. If additional x-rays are necessary, they can be taken at our facility."
                  }
                />
              </div>
              <div className="new-patient-cta-wrapper">
                <Button text="New Patient form" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPatientPage;
