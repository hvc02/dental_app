"use client"
import React from 'react'
import { Widget } from '@typeform/embed-react'
import { LocationIconBlack, MailIcon, PhoneIcon } from '@/components/SVGs'
import { Paragraph, PrimaryHeading } from '@/components/Typography'

const ContactPage = () => {
    return (
        <div>
            <div className="section half-bottom contact-section dark">
                <div className="container">
                    <div className="contact-flex-wrapper">
                        <div className="contact-left">
                            <PrimaryHeading content='Contact Us' />
                            <Paragraph content={"Need to get in touch with us? Either fill out the form with your inquiry or reach out to us via phone or email."} />
                            <div className="contact-list">
                                <div className="contact-list-item">
                                    <div className="contact-list-item-icon">
                                        <LocationIconBlack />
                                    </div>
                                    <div className="contact-list-item-content">
                                        <Paragraph content='Address here' />
                                    </div>
                                </div>
                                <div className="contact-list-item">
                                    <div className="contact-list-item-icon">
                                        <PhoneIcon />
                                    </div>
                                    <div className="contact-list-item-content">
                                        <Paragraph content='(512)-645-722' />
                                    </div>
                                </div>

                                <div className="contact-list-item">
                                    <div className="contact-list-item-icon">
                                        <MailIcon />
                                    </div>
                                    <div className="contact-list-item-content">
                                        <Paragraph content='phoenixdental@gmail.com' />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="contact-right">
                            <Widget id="apMS96Vb" className="contact-form" style={{ background: "transparent", height: "350px" }} />
                            {/* <div data-tf-widget="apMS96Vb" data-tf-opacity="100" data-tf-iframe-props="title=Patient Enquiry Form" data-tf-transitive-search-params data-tf-medium="snippet" style={{ width: "100%", height: "500px" }}></div><script src="//embed.typeform.com/next/embed.js"></script> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage