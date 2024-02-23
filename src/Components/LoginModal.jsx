import React, { useState } from 'react'
import loginImg from "../assets/loginImg.png"
import loginLogo from "../assets/logo.png"
import PrimaryButton from './PrimaryButton'
import fbLogin from "../assets/fbLogin.png"
import googleLogin from "../assets/googleLogin.png"
import appleLogin from "../assets/appleLogin.png"
import modalClose from "../assets/modalClose.png"
import eyeOpen from "../assets/eyeOpen.png";
import eyeClose from "../assets/eyeClose.png";


const LoginModal = ({ closeModal }) => {

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeClose);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eyeOpen);
            setType('text')
        } else {
            setIcon(eyeClose)
            setType('password')
        }
    }

    return (
        <>
            <div className='ModalContainer'>
                <div className="loginModalOverlay">

                    <div className="LoginModalContainer">
                        <div className="closeIcon">
                            <img src={modalClose} onClick={closeModal} alt="" />
                        </div>

                        <div className="loginModalDiv">
                            <div className="LoginLeftDiv" >
                                <img src={loginImg} alt="" />
                            </div>
                            <div className="LoginRightDiv">
                                <div className="loginLogo">
                                    <img src={loginLogo} alt="" />
                                </div>
                                <p>Save time and boost your productivity using powerful Banigi AI features</p>

                                <div className="LoginForm">
                                    <form action="">
                                        <input type="text" placeholder='Email/Phone Number' />
                                        <div className="passwordField">
                                            <input type={type}
                                                name="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="current-password" />
                                                  <img src={icon} alt="" onClick={handleToggle} className='eyeIcon' />
                                        </div>
                                      
                                        <span>Forgot Password?</span>

                                        <PrimaryButton text="Login" />
                                    </form>

                                </div>
                                <span className='loginTextCenter'>Or Login with</span>

                                <div className="socialLogin">
                                    <img src={fbLogin} alt="" />
                                    <img src={googleLogin} alt="" />
                                    <img src={appleLogin} alt="" />
                                </div>

                                <p className='loginTextCenter'>Dont have an account?<span>Signup</span></p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default LoginModal