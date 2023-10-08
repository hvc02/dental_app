import React from 'react'
import { LocationIcon } from '@/components/SVGs'
import { Paragraph, PrimaryHeading } from '@/components/Typography'
import Button from '@/components/Button'

const Location = () => {
    return (
        <div className='section location-section slider-section'>
            <div className="container">
                <div className="vertical-flex">
                    <div className="location-content-wrapper page-title bottom-space">
                        <span className="icon-wrapper">
                            <LocationIcon />
                        </span>
                        <PrimaryHeading content="13 locations accross Boston, MA" />
                        <Paragraph content="Our locations are conveniently located so you can quickly get in and out" className="400_max" />
                    </div>
                    <Button text="View Locations" />
                </div>

                <h1>Slider comes here</h1>
            </div>
        </div>
    )
}

export default Location