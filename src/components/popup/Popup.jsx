import React from 'react'
import { PropTypes } from 'prop-types';
const Popup = ({onClose}) => {
    const handleCreateNowClick = () => {
        // Call the onClose callback to close the popup
        onClose();
      };
  
  return (
    
<div className="popup">
<form className='flex justify-between p-3 '> 
                        <div className="form relative top-20 left-[40%] bg-[lightgray] border w-[30%] p-4 rounded-md">
                            <h1 className='text-[20px] '>Create user</h1>
                        <dive className="userleft flex flex-col my-2">
                          <label >Username</label>
                          <input type="text" 
                          placeholder='annabakers99'
                          className='border-b outline-none p-1 rounded-md' />
                        </dive>
                        <dive className="userleft flex flex-col my-2">
                          <label>Full Name</label>
                          <input type="text" 
                          placeholder='Anna Bakkers'
                          className='border-b outline-none p-1 rounded-md' />
                        </dive>
                        <dive className="userleft flex flex-col my-2">
                          <label>Email  </label>
                          <input type="text" 
                          placeholder='annabakker@gmail.com'
                          className='border-b outline-none p-1 rounded-md' />
                        </dive>
                        <dive className="userleft flex flex-col my-2">
                          <label>Phone</label>
                          <input type="text" 
                          placeholder='+9233474689'
                          className='border-b outline-none p-1 rounded-md' />
                        </dive>
                        <dive className="userleft flex flex-col my-2">
                          <label>Address</label>
                          <input type="text" 
                          placeholder='feruzpur road lahore'
                          className='border-b outline-none p-1 rounded-md' />
                     <button className=' relative top-3 left-32 border w-24  rounded-md right-6' onClick={handleCreateNowClick}>CreateNow</button>

                        </dive>

                        </div> 
                       
                    </form>
</div> 
 )


  }
  Popup.propTypes = {
    onClose: PropTypes.func.isRequired, // Ensure onClose is a function and is required
  };
  
export default Popup