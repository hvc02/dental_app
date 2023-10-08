import React from 'react'
import { StarsIcon } from '@/components/SVGs'
import { Paragraph, PrimaryHeading } from '@/components/Typography'

const Features = () => {
    return (
        <>
            <Feature heading="Experience matters" desc="Our dentists have decades of experience and they are supported by the highest rated clinical teams in Austin!" label="experience" />
            <Feature heading="The right technology matters" desc="Dentistry is both art and science. We employ the latest technologies in dentistry, continually train our staff on the latest methodologies and best-practices, and pride ourselves on partnering with the best clinical teams." label="tech" flipped={true} />
            <Feature heading="Transparency matters" desc="Get only the care that you need, and the options you select—nothing more, nothing less." label="transparency" />
        </>
    )
}

const Feature = ({ heading, desc, flipped, label }) => {
    return (
        <div className='section features-section half-bottom dark'>
            <div className="container">
                <div className="vertical-flex">
                    <div className={`w-layout-grid grid ${flipped ? 'flipped-mobile' : ''}`}>
                        <div className={`image-div ${label}`} id={`${label}-image-div`}></div>
                        <div className={`spaced-div ${label}`} id={flipped ? 'tech-content-div' : ''}>
                            <div className="star-block">
                                <StarsIcon />
                            </div>
                            <PrimaryHeading content={heading} />
                            <Paragraph content={desc} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features