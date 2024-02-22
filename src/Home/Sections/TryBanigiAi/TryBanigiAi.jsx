import React, { useState } from 'react'
import TryDesignForm from '../../../Components/TryDesignForm'

const TryBanigiAi = () => {

  const [activeTab,setActiveTab]=useState(0);
  const tabs = [
    { title: 'Tab 1', content: <TryDesignForm/> },
    { title: 'Tab 2', content: 'Content 2' },
    { title: 'Tab 3', content: 'Content 3' }
  ];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <div
        key={index}
        onClick={() => handleTabClick(index)}
        className={activeTab === index ? 'active' : ''}
      >
        {tab.title}
      </div>
    ));
  };
  return (
    <>
    
    <div className='TryDesignDiv'>
        <h3>Try <span>Banigi AI </span>Design</h3>

        
        <div className="tabs-container">
      {renderTabs()}
      <div className="tab-content">{tabs[activeTab]?.content}</div>
    </div>
    </div>

    </>
  )
}



export default TryBanigiAi
