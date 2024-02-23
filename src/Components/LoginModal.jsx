import React from 'react'

const LoginModal = ({ closeModal }) => {
    return (
        <>
            <div className='ModalContainer'>
                <div className="loginModalOverlay"></div>
                <div className="LoginModalContainer">
                    <h1>Login</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi iste assumenda odit quasi esse voluptates deserunt consequuntur cumque reiciendis earum ipsa, vero dolorem optio, architecto, sunt perferendis accusamus porro laboriosam!</p>
                    <button onClick={closeModal}>Close</button>
                </div>

            </div>
        </>

    )
}

export default LoginModal
