import React from 'react'
import modalClose from "../assets/modalClose.png"

const PrivacyPolicy = () => {
  return (
    <>
      <div className="legalModalContainer">
        <div className="modalHeader">
          <h3>Privacy and Policy</h3>
          <img src={modalClose} alt="" />
        </div>
        <div className="modalText">
          <p>At BanigiAI, protecting our users privacy is a top priority. We are committed to ensuring the confidentiality and security of your personal information. This privacy policy outlines our practices concerning the collection, use, and sharing of personal information through our website and mobile application.
            Information We Collect
          </p>
          
          <span>Use of Personal Information</span>
          <p>We utilize the personal information we collect to maintain and enhance our website and services. We may also use it to send you promotional materials or updates.
Sharing of Personal Information
We may share your personal information with third parties, such as service providers, to facilitate our services or as required by law.
</p>
        </div>

      </div>

    </>
  )
}

export default PrivacyPolicy
