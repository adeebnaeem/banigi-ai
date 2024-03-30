import React from 'react'
import job1 from "../../../assets/job1.png"
import job2 from "../../../assets/job2.png"
import job3 from "../../../assets/job3.png"
import job4 from "../../../assets/job4.png"
import job5 from "../../../assets/job5.png"
const BuildJob = () => {
  return (
    <>
    

    <div className="buildJobDiv">
        <h3>Built Your <span>Job</span> with Banigi</h3>
        <div className='top-down-img'>
            <img src={job1} alt="" />
            <img src={job2} alt="" />
            <img src={job3} alt="" />
            <img src={job4} alt="" />
            <img src={job5} alt="" />
            
        </div>
    </div>
    
    </>
  )
}

export default BuildJob