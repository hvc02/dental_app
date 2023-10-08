import React from 'react'
import { HappyFaceIcon } from '@/components/SVGs'
import { PrimaryHeading } from '@/components/Typography'

const Team = () => {
    return (
        <div className='section half-bottom section-team quarter-shell'>
            <div className="container">
                <div className="vertical-flex">
                    <div className="team-content-wrapper page-title bottom-space">
                        <span className="icon-wrapper">
                            <HappyFaceIcon />
                        </span>
                        <PrimaryHeading content="Our Dentists and Dental Hygienists Love What They Do" />
                    </div>
                    <div className="team-list-wrap">
                        <div className="team-grid">
                            <div className="list-item">
                                <div className="team-member-photo" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfnfszqky/image/upload/v1696777498/pexels-karolina-grabowska-6627836_puvsvz.jpg")' }}>
                                    <div className="team-member-hover">
                                        <div className="team-member-name">Dr. Alan Smith</div>
                                        <div className="team-member-name">Founder</div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-item">
                                <div className="team-member-photo" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfnfszqky/image/upload/v1696777498/pexels-karolina-grabowska-6627836_puvsvz.jpg")' }}>
                                    <div className="team-member-hover">
                                        <div className="team-member-name">Dr. Alan Smith</div>
                                        <div className="team-member-name">Founder</div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-item">
                                <div className="team-member-photo" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfnfszqky/image/upload/v1696777498/pexels-karolina-grabowska-6627836_puvsvz.jpg")' }}>
                                    <div className="team-member-hover">
                                        <div className="team-member-name">Dr. Alan Smith</div>
                                        <div className="team-member-name">Founder</div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-item">
                                <div className="team-member-photo" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfnfszqky/image/upload/v1696777498/pexels-karolina-grabowska-6627836_puvsvz.jpg")' }}>
                                    <div className="team-member-hover">
                                        <div className="team-member-name">Dr. Alan Smith</div>
                                        <div className="team-member-name">Founder</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Team