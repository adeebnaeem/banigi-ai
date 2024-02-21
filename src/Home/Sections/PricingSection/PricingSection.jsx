import React from 'react'
import PricingCard from '../../../Components/PricingCard'

const PricingSection = () => {
  return (
    <>
    
    <div className="pricing_section">
        <div className="pricing_header">
            <h3>Pricing</h3>
            <p>You can stay on the personal $8 plan until you have need enough design generation to justify your self. After you can upgrade the package.</p>
        </div>

        <div className="pricing_bottom">
                <PricingCard/>
                <PricingCard/>
                <PricingCard/>

        </div>
    </div>
    
    </>
  )
}

export default PricingSection
