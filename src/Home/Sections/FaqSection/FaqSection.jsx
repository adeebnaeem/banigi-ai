import React from 'react'
import FaqCard from '../../../Components/FaqCard'

const FaqSection = () => {

    const questions=[
        {
        title:"Can i use Banigi AI for free?",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
        title:"Can i use Banigi AI for free?",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
        title:"Can i use Banigi AI for free?",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
        title:"Can i use Banigi AI for free?",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },{
        title:"Can i use Banigi AI for free?",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    }

]
  return (
    <>

        <div className="faqDiv" id='faq'>
            <h3>Frequently Asked <span>Questions</span></h3>

            <div className="faqList">

                    {
                        questions.map(({title,content})=>(
                            <FaqCard title={title} content={content}/>
                        ))
                    }
                
              
            </div>
        </div>
    
    </>
  )
}

export default FaqSection