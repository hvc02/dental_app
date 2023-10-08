'use client'
import React, { useState } from 'react'
import NavigationList from '@/components/Navbar/NavigationList'
import Hamburger from 'hamburger-react'
import Button from '@/components/Button'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    const openMenu = () => setOpen(!open)
    return (
        <div className='topbar'>
            <div className="top-left">
                <div className="top-logo-wrapper">
                    <img src="https://i.ibb.co/xJXGtVS/output-onlinepngtools.png" alt="output-onlinepngtools" />
                </div>
                {
                    isOpen &&
                    <div className={`nav-menu-wrapper ${isOpen ? 'active' : ''}`}>
                        <NavigationList />
                    </div>
                }
            </div>
            <ul className='middle-list'>
                <li><p>Services</p></li>
                <li><p>Team</p></li>
                <li><p>About us</p></li>
            </ul>
            <div className="top-right">
                <p className="phone-number">(512)-645-722</p>
                <div className="hamburger-icon-wrapper">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <div className="topbar-cta-wrapper">
                    <Button text='Schedule Now' />
                </div>
            </div>


        </div>
    )
}

export default Navbar