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
                            <li>Home</li>
                            <li>How It work</li>
                            <li>Feedback</li>
                            <li>Pricing</li>
                            <li>Faq</li>
                            <li>Contact Us</li>
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
