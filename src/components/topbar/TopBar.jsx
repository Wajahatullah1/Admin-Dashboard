import React from 'react';
import {NotificationsOutlined, SettingsSuggestOutlined, LanguageOutlined} from '@mui/icons-material';
const TopBar = () => {
  return (
    <div className="topbar p-4 sticky z-[1000] top-0 bg-white">
      <div className="container">
        <div className="head flex justify-between">
          <div className="left text-2xl text-[darkblue] font-bold">Admin Dashboard</div>
          <div className="right flex items-center cursor-pointer">
            <div className="notify">
              < NotificationsOutlined />
              <span className='span bg-[red] px-1 border rounded-[23px] relative right-5 bottom-3 text-white'>2</span>
            </div>
            <div className="notify">
              < LanguageOutlined />
            
              <span className='span bg-[red] px-1 border rounded-[23px] relative right-5 bottom-3 text-white'>2</span>
            </div>
            <div className="notify">
              < SettingsSuggestOutlined />
              <span className='span bg-[red] px-1 border rounded-[23px] relative right-5 bottom-3 text-white'>2</span>
            </div>
            <img className='w-10 rounded-3xl' src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
             </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
