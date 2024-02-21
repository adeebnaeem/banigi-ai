import React from 'react'
import contactImg from "../../../assets/contactImg.png"

const ContactUs = () => {
  return (
   <>
   <div className="contactUsSection">
        <h4> <span>Contact</span> Us</h4>

        <div className="contactusDiv">
            <div className="contactUsLeft">
                    <img src={contactImg} alt="" />
                    <p>Our communication hub awaits!
Here, you&#39;ll find various channels to connect with us. Whether you have questions, feedback, or need assistance, we're just a message away. Explore our contact form and social media links to get in touch. We value your input and are here to assist you promptly!</p>
            </div>
            <div className="contactUsRight">

            </div>
        </div>
   </div>
   </>
  )
}

export default ContactUs
