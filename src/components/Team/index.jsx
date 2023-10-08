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
                                <div className="team-member-photo" style={{ backgroundImage: 'url("https://assets.website-files.com/6178312e621dc29857e9c3e5/63e3cedeb40e370db6c149bc_Asset%202.png")' }}>
                                    <div className="team-member-hover">
                                        <div className="team-member-name">Hari</div>
                                        <div className="team-member-name">Founder</div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-item">
                                <div className="team-member-photo" style={{ backgroundImage: 'url("https://assets.website-files.com/6178312e621dc29857e9c3e5/63e3cedeb40e370db6c149bc_Asset%202.png")' }}>
                                    <div className="team-member-hover">
                                        <div className="team-member-name">Hari</div>
                                        <div className="team-member-name">Founder</div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-item">
                                <div className="team-member-photo" style={{ backgroundImage: 'url("https://assets.website-files.com/6178312e621dc29857e9c3e5/63e3cedeb40e370db6c149bc_Asset%202.png")' }}>
                                    <div className="team-member-hover">
                                        <div className="team-member-name">Hari</div>
                                        <div className="team-member-name">Founder</div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-item">
                                <div className="team-member-photo" style={{ backgroundImage: 'url("https://assets.website-files.com/6178312e621dc29857e9c3e5/63e3cedeb40e370db6c149bc_Asset%202.png")' }}>
                                    <div className="team-member-hover">
                                        <div className="team-member-name">Hari</div>
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