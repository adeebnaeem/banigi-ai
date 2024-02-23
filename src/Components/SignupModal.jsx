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

const SignupModal = ({ closeModal }) => {
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmPassword] = useState("");
    const [passwordType, setPasswordType] = useState('password');
    const [confirmPasswordType, setConfirmPasswordType] = useState('password');
    const [passwordIcon, setPasswordIcon] = useState(eyeClose);
    const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeClose);

    const handleTogglePassword = () => {
        if (passwordType === 'password') {
            setPasswordIcon(eyeOpen);
            setPasswordType('text');
        } else {
            setPasswordIcon(eyeClose);
            setPasswordType('password');
        }
        
    }

    const handleToggleConfirmPassword = () => {
        if (confirmPasswordType === 'password') {
            setConfirmPasswordIcon(eyeOpen);
            setConfirmPasswordType('text');
        } else {
            setConfirmPasswordIcon(eyeClose);
            setConfirmPasswordType('password');
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
                                <p>Register to save time and boost your productivity using powerful Banigi AI</p>

                                <div className="LoginForm">
                                    <form action="">
                                        <input type="text" placeholder='Email/Phone Number' />
                                        <div className="passwordField">
                                            <input type={passwordType}
                                                name="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="current-password" />
                                            <img src={passwordIcon} alt="" onClick={handleTogglePassword} className='eyeIcon' />
                                        </div>
                                        <div className="passwordField">
                                            <input type={confirmPasswordType}
                                                value={Confirmpassword}
                                                placeholder="Confirm Password"
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                autoComplete="current-password" />
                                            <img src={confirmPasswordIcon} alt="" onClick={handleToggleConfirmPassword} className='eyeIcon' />
                                        </div>
                                        <span>Forgot Password?</span>

                                        <PrimaryButton text="Sign Up" />

                                    </form>

                                </div>
                                <span className='loginTextCenter'>Or Signup with</span>

                                <div className="socialLogin">
                                    <img src={fbLogin} alt="" />
                                    <img src={googleLogin} alt="" />
                                    <img src={appleLogin} alt="" />
                                </div>

                                <p className='loginTextCenter'>Already have an account?<span>Login</span></p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default SignupModal
