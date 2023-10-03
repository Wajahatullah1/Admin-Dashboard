import React from 'react'
import {PersonOutlined , CalendarToday , PhoneAndroid,MailOutline ,LocationSearching ,Publish} from '@mui/icons-material'
import Popup from '../popup/Popup';
import { useState } from 'react';

const User = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (

    <div className="user w-[80%]">
        <div className="usercontainer">
            <div className=" flex justify-between items-center">
                <div className="text-[30px]"><h1>Edit User</h1></div> 
                <div><buttobn className="bg-[#359235] p-3 rounded-lg text-white cursor-pointer" onClick={handleCreateClick} >Create</buttobn></div>
               
            </div>
            <div className="usercontainer flex justify-between mt-5">
                <div className="usershow p-4 border flex flex-col tems-center w-[30%] gap-3">
                    <div className="elements flex  items-center gap-5 ">
                  <img className='w-14 h-14 rounded-full' src="/women.jpg" alt="" />
               
                  <div className="title flex flex-col">
                    <span>Anna Bakers</span>
                    <span className='text-[gray]'>Software Engineer</span>
                  </div>
                  </div>
                   <div className="usericons">
                    <h1>Account Details</h1>
                    <div className="usersItem flex items-center gap-2 my-2">
                        <span><PersonOutlined className='mb-1 text-[gray]'/></span>
                        <span className='text-[gray]'>Annabakers99</span>
                    </div>
                    <div className="usersItem flex items-center gap-2 my-2">
                        <span><CalendarToday className='mb-1 text-[gray]'/></span>
                        <span className='text-[gray]'>10.12.1999</span>
                    </div>
                    <h1>Contact Details</h1>
                    <div className="usersItem flex items-center gap-2 my-2">
                        <span><PhoneAndroid className='mb-1 text-[gray]'/></span>
                        <span className='text-[gray]'>+92334645387</span>
                    </div>
                    <div className="usersItem flex items-center gap-2 my-2">
                        <span><MailOutline className='mb-1 text-[gray]'/></span>
                        <span className='text-[gray]'>wajee123@gmail.com</span>
                    </div>
                    <div className="usersItem flex items-center gap-2 my-2">
                        <span><LocationSearching className='mb-1 text-[gray]'/></span>
                        <span className='text-[gray]'>Tokyeo</span>
                    </div>
                   </div>
            
                </div>
                {isPopupOpen && (

<div className=" fixed top-0 left-0 w-full h-full bg-primary-3 bg-opacity-50 backdrop-blur-5 z-50">
    {<Popup onClose={handleClosePopup} />}

</div>
)}
                <div className="userupdate border  w-[50%]">
                    <span className='text-[25px] p-4'>Edit</span>
                    <form className='flex justify-between p-3'> 
                        <div className="form ">
                        <dive className="userleft flex flex-col my-2">
                          <label >Username</label>
                          <input type="text" 
                          placeholder='annabakers99'
                          className='border-b outline-none p-1' />
                        </dive>
                        <dive className="userleft flex flex-col my-2">
                          <label>Full Name</label>
                          <input type="text" 
                          placeholder='Anna Bakkers'
                          className='border-b outline-none p-1' />
                        </dive>
                        <dive className="userleft flex flex-col my-2">
                          <label>Email  </label>
                          <input type="text" 
                          placeholder='annabakker@gmail.com'
                          className='border-b outline-none p-1' />
                        </dive>
                        <dive className="userleft flex flex-col my-2">
                          <label>Phone</label>
                          <input type="text" 
                          placeholder='+9233474689'
                          className='border-b outline-none p-1' />
                        </dive>
                        <dive className="userleft flex flex-col my-2">
                          <label>Address</label>
                          <input type="text" 
                          placeholder='feruzpur road lahore'
                          className='border-b outline-none p-1' />
                        </dive>
                        </div> 
                        <div className="userright">
                        <img className='w-32 h-32 rounded-md' src="/women.jpg" alt="" />
                        <label htmlFor="file" id="file" ><Publish/></label>
                        <input type="file" style={{display:"none"}}/>
                        </div>
                        <button className='relative top-60 bg-[green] w-16 h-8 text-white rounded-md right-6' >Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )

}

export default User