import React, { useState } from 'react'
import logo from '../assets/logo.png'
import LoginModal from '../Components/LoginModal';

const Header = () => {

    const [showModal,setShowModal]=useState(false);

    const closeModal=()=>setShowModal(false);

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
                        <button className='login_btn' onClick={()=>{setShowModal(true)}}>Login</button>
                        {showModal && <LoginModal closeModal={closeModal}/>}
                        <button className='getStarted_btn'onClick={()=>{setShowModal(true)}}>Get Started</button>
                        {showModal && <LoginModal closeModal={closeModal}/>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
