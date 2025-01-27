import React, { useState } from 'react'
import InteriorDesignDash from '../../../Components/dashboard_component/InteriorDesignDash';
import ExteriorDesignDash from '../../../Components/dashboard_component/ExteriorDesignDash';
import LandscapeDesignDash from '../../../Components/dashboard_component/LandscapeDesignDash';
import CustomDesignDash from '../../../Components/dashboard_component/CustomDesignDash';
import AllDesignDash from '../../../Components/dashboard_component/AllDesignDash';

const MyDesign = () => {
  
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: 'All', content: <AllDesignDash/> },
    { title: 'Interior Design', content: <InteriorDesignDash/> },
    { title: 'Exterior Design', content: <ExteriorDesignDash/> },
    { title: 'Landscape Design', content: <LandscapeDesignDash/> },
    { title: 'Custom Design', content: <CustomDesignDash/> }
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
    
    <div className="myDesignSection">

      <h3>My Design</h3>

      <div className="tabs-container">
          <div className="tab-heading">
          {renderTabs()}
          </div>

          <div className="tab_content_div">
          <div className="tab-content">{tabs[activeTab]?.content}</div>
          </div>

    </div>
    </div>
    
    </>
  )
}

export default MyDesign