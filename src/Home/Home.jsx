import React from 'react'
import BannerSection from './Sections/BannerSection/BannerSection'
import HowItWorkSection from './Sections/HowItWorkSection/HowItWorkSection'
import DesignGrid from './Sections/DesignGrid/DesignGrid'
import Feedback from './Sections/Feedback/Feedback'
import DownloadApp from './Sections/DownloadApp/DownloadApp'
import PricingSection from './Sections/PricingSection/PricingSection'
import ContactUs from './Sections/ContactUs/ContactUs'
import FaqSection from './Sections/FaqSection/FaqSection'

const Home = () => {
  return (
    <div>
      <BannerSection/>
      <HowItWorkSection/>
      <DesignGrid/>

      <Feedback/>

      <DownloadApp/>
      <PricingSection/>

      <FaqSection/>
      <ContactUs/>
    </div>
  )
}

export default Home
