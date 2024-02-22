import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';


import t1 from "../../../assets/t1.png";
import t2 from "../../../assets/t2.png";
import t3 from "../../../assets/t3.png";
import t4 from "../../../assets/t4.png";



import TryDesignForm from '../../../Components/TryDesignForm'

const TryBanigiAi = () => {

  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: 'Interior Design', content: <TryDesignForm /> },
    { title: 'Exterior Design', content: 'Content 2' },
    { title: 'Landscape Design', content: 'Content 3' },
    { title: 'Custom Design', content: 'Content 4' }
  ];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <button
        key={index}
        onClick={() => handleTabClick(index)}
        className={activeTab === index ? 'active' : ''}
      >
        {tab.title}
      </button>
    ));
  };
  return (
    <>

      <div className='TryDesignDiv'>
        <h3>Try <span>Banigi AI </span>Design</h3>


        <div className="tabs-container">
          <div className="tab-heading">
          {renderTabs()}
          </div>

          <div className="tab_content_div">
          <div className="tab-content">{tabs[activeTab]?.content}</div>
          

          <Swiper
                    modules={[ Pagination]}

                    spaceBetween={50}
                    slidesPerView={1}
                    
                    pagination={{
                        clickable: true,
                    }}

                    className="mySwiper"

                >
                    <SwiperSlide><img src={t1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={t2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={t3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={t4} alt="" /></SwiperSlide>
                    

                    

                </Swiper>

              
          
          </div>
          
        </div>
      </div>

    </>
  )
}



export default TryBanigiAi
