"use client";
import React from "react";
// import { Widget } from "@typeform/embed-react";
import {
  ClockIcon,
  LocationIconBlack,
  MailIcon,
  PhoneIcon,
} from "@/components/SVGs";
import { Paragraph, PrimaryHeading } from "@/components/Typography";

const ContactPage = () => {
  return (
    <div>
      <div className="section half-bottom contact-section dark">
        <div className="container">
          <div className="contact-flex-wrapper">
            <div className="contact-left">
              <PrimaryHeading content="Contact Us" />
              <Paragraph
                content={
                  "Need to get in touch with us? Reach out to us via phone or email."
                }
              />
              <div className="contact-list">
                <div className="contact-list-item">
                  <div className="contact-list-item-icon">
                    <LocationIconBlack />
                  </div>
                  <div className="contact-list-item-content">
                    <Paragraph
                      content={
                        <>
                          118 Concord street, Framingham, <br /> Massachusetts
                          01702
                        </>
                      }
                    />
                    <a
                      href="https://maps.app.goo.gl/myKzCgEtQSCCNg8K6"
                      target="_blank"
                      className="location-link"
                    >
                      Maps Location
                    </a>
                    {/* <Paragraph content={<>Maps Location</>} /> */}
                  </div>
                </div>
                <div className="contact-list-item">
                  <div className="contact-list-item-icon">
                    <PhoneIcon />
                  </div>
                  <div className="contact-list-item-content">
                    <Paragraph content="508-202-9067" />
                  </div>
                </div>

                <div className="contact-list-item">
                  <div className="contact-list-item-icon">
                    <MailIcon />
                  </div>
                  <div className="contact-list-item-content">
                    <Paragraph content="thephoenixdental@gmail.com" />
                  </div>
                </div>

                <div className="contact-list-item">
                  <div className="contact-list-item-icon">
                    <ClockIcon />
                  </div>
                  <div className="contact-list-item-content">
                    <Paragraph content="Timings" />
                    <div className="">
                      <Paragraph content="Mon-Fri: 9am - 5pm" />
                      <Paragraph content="Sat: 9am - 2pm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="contact-right">
              <Widget
                id="apMS96Vb"
                className="contact-form"
                style={{ background: "transparent", height: "350px" }}
              />
            </div> */}
          </div>

          <div className="maps-container dark">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.9853272368123!2d-71.41950898833316!3d42.27883657108039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e388381404f0b1%3A0xe21d154d08300357!2s118%20Concord%20St%2C%20Framingham%2C%20MA%2001702%2C%20USA!5e0!3m2!1sen!2sin!4v1698157161964!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
