import React from 'react'
import footerLogo from "../assets/logo.png"
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
const Footer = () => {
  return (
    <>

      <div className="footer_Section">
        <div className="footer_left">
          <img src={footerLogo} alt="Banigi Ai" />

          <p>Transform your home effortlessly with AI at Banigi AI. Elevate interiors, exteriors, and landscapes seamlessly. Personalized creativity meets efficient custom design. Redefine your space.</p>
          <div className="footer_social_link">

            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>

        <div className="footer_right">
            <div className="footer_quick_lnks">
              <h5>Quick Links</h5>
              <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>Faq</li>
                <li>Feedback</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer_design_types">
                <h5>Design Types</h5>
                <ul>
                  <li>Interior Design</li>
                  <li>Exterior Design</li>
                  <li>Landscape Design</li>
                  <li>Custom Design</li>
                </ul>
            </div>
            <div className="footer_legal">
              <h5>Legal</h5>
              <ul>
                <li>Privacy & Policy</li>
                <li>Terms & Consitions</li>
                <li>Refund Policy</li>
              </ul>
            </div>
        </div>
      </div>

      <div className="copyright_div">
        <h5>Copyright 2024 Banigi AI All rights reserved.</h5>
      </div>

    </>
  )
}

export default Footer
