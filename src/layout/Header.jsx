import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <>
            <nav>

                <div className="navbar">
                    <div className="nav_logo">
                        <img src={logo} alt="Banigi Ai" />
                    </div>

                    <div className="nav_links">
                        <ul>
                            <li>Home</li>
                            <li>How It work</li>
                            <li>Feedback</li>
                            <li>Pricing</li>
                            <li>Faq</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="nav_button">
                        <button className='login_btn'>Login</button>
                        <button className='getStarted_btn'>Get Started</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
