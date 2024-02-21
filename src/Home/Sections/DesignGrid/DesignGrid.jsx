import React from 'react'

import d1 from "../../../assets/d1.png";
import d2 from "../../../assets/d2.png";
import d3 from "../../../assets/d3.png";
import d4 from "../../../assets/d4.png";
import d5 from "../../../assets/d5.png";
import d6 from "../../../assets/d6.png";



const DesignGrid = () => {
  return (
  <>
    <div className='DesignGridDiv'>

        <h2>Different <span>Design</span> Styles</h2>

        <div className="DesignGridLayout">
            <div className="grid_item1">
                <img src={d1} alt="" />
            </div>
            <div className="grid_item2">
                <img src={d2} alt="" />
            </div>
            <div className="grid_item3">
                <img src={d3} alt="" />
            </div>
            <div className="grid_item4">
                <img src={d4} alt="" />
            </div>
            <div className="grid_item5">
                <img src={d5} alt="" />
            </div>
            <div className="grid_item6">
                <img src={d6} alt="" />
            </div>
         

        </div>

    </div>
  </>
  )
}

export default DesignGrid
