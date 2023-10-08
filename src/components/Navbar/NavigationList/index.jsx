import React from 'react'

const NavigationList = () => {
    return (
        <nav className='nav-menu'>
            <ul className='nav-menu-list'>
                <li className='nav-item'>
                    <p>Home</p>
                </li>
                <li className='nav-item'>
                    <p>Services</p>
                </li>
                <li className='nav-item'>
                    <p>Location</p>
                </li>
                {/* <li className='nav-item'></li> */}
            </ul>
        </nav>
    )
}

export default NavigationList