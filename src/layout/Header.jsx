import React, { useState } from 'react'
import logo from '../assets/logo.png'
import LoginModal from '../Components/LoginModal';
import SignupModal from '../Components/SignupModal';

const Header = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const openLoginModal = () => {
        setShowLoginModal(true);
        setShowSignupModal(false);
    };

    const openSignupModal = () => {
        setShowSignupModal(true);
        setShowLoginModal(false);
    };

    const closeModal = () => {
        setShowLoginModal(false);
        setShowSignupModal(false);
    };


    return (
        <>
            <nav>

                <div className="navbar">
                    <div className="nav_logo">
                        <img src={logo} alt="Banigi Ai" />
                    </div>

                    <div className="nav_links">
                        <ul>
                            <a href="#main_banner"><li>Home</li></a>
                            <a href="#howItWork"><li>How It work</li></a>
                            <a href="#feedback"><li>Feedback</li></a>
                            <a href="#pricing"><li>Pricing</li></a>
                            <a href="#faq"><li>Faq</li></a>
                           <a href="#contact_us"><li>Contact Us</li></a> 
                        </ul>
                    </div>

                    <div className="nav_button">
                        <button className='login_btn' onClick={openLoginModal}>Login</button>
                        {showLoginModal && <LoginModal closeModal={closeModal}/>}
                        <button className='getStarted_btn' onClick={openSignupModal}>Get Started</button>
                        {showSignupModal && <SignupModal closeModal={closeModal}/>} 
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
