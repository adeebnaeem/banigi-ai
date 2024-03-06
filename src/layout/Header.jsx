import React, { useState } from 'react'
import logo from '../assets/logo.png'
import mobileMenu from "../assets/mobileMenu.png"
import LoginModal from '../Components/LoginModal';
import SignupModal from '../Components/SignupModal';
import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";


const Header = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const urlCheck=useLocation();
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
        // setShowSignupModal(false);
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
                            
                            <a href="#main_banner" className= {urlCheck.hash === "#main_banner" ? "active_navLink" : "active_navLink"}><li>Home</li></a>
                          
                            <a href="#howItWork"className={urlCheck.hash === "#howItWork" && "active_navLink"}><li>How It Work</li></a>
                            <a href="#feedback" className={urlCheck.hash === "#feedback" && "active_navLink"}><li>Feedback</li></a>
                            <a href="#pricing" className={urlCheck.hash === "#pricing" && "active_navLink"}><li>Pricing</li></a>
                            <a href="#faq"className={urlCheck.hash === "#faq" && "active_navLink"}><li>Faq</li></a>
                            <a href="#contact_us"className={urlCheck.hash === "#contact_us" && "active_navLink"}><li>Contact Us</li></a>
                        </ul>
                    </div>

                    <div className="nav_button">
                        <button className='login_btn' onClick={openLoginModal}>Login</button>
                        {showLoginModal && <LoginModal closeModal={closeModal} />}
                        <button className='getStarted_btn' onClick={openSignupModal}>Get Started</button>
                        {showSignupModal && <SignupModal closeModal={closeModal} />}
                        <img src={mobileMenu} alt="" className='mobilemenu' onClick={() => { setShowMobileNav(!showMobileNav) }} />
                    </div>


                </div>

                {showMobileNav && <div className="mobile_navbar">
                    <ul>
                    <a href="#main_banner" className={urlCheck.hash === "#main_banner " && "active_navLink"}><li>Home</li></a>
                          
                          <a href="#howItWork"className={urlCheck.hash === "#howItWork" && "active_navLink"}><li>How It Work</li></a>
                          <a href="#feedback" className={urlCheck.hash === "#feedback" && "active_navLink"}><li>Feedback</li></a>
                          <a href="#pricing" className={urlCheck.hash === "#pricing" && "active_navLink"}><li>Pricing</li></a>
                          <a href="#faq"className={urlCheck.hash === "#faq" && "active_navLink"}><li>Faq</li></a>
                          <a href="#contact_us"className={urlCheck.hash === "#contact_us" && "active_navLink"}><li>Contact Us</li></a>

                    </ul>
                    <button className='login_btn' onClick={openLoginModal}>Login</button>
                    {showLoginModal && <LoginModal closeModal={closeModal} />}
                    <button className='getStarted_btn' onClick={openSignupModal}>Get Started</button>
                    {showSignupModal && <SignupModal closeModal={closeModal} />}
                </div>}

            </nav>
        </>
    )
}

export default Header
