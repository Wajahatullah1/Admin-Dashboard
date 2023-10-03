import React from 'react';
import PropTypes from 'prop-types';

const Wedgetlrg = () => {
  const Button = ({ type }) => {
    return <button className={"button p-2 border rounded-md bg-[lightgray] " + type}>{type}</button>; // Added space before the class name
  };
  return (
    <div className="wl border w-[60%] my-10 p-4 ">
      <div className="wlm ">
        <h1 className='text-[25px]'>Latest Transaction</h1>
        <table >
          <tr className='flex justify-between gap-28 ml-5 '>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          <tr className='flex justify-between items-center gap-10 my-2'>
            <td className="flex items-center">
              <img className='w-12 h-12 rounded-full' src="./girl.jpeg" alt="" />
              <span>Susan carol</span>
            </td>
            <td>2 Jan 2021</td>
            <td>$122.00</td>
            <td className='text-[blue]'><Button type="Approved"/></td>
          </tr>
          <tr className='flex justify-between items-center gap-10  my-2'>
            <td className="flex items-center">
              <img className='w-12 h-12 rounded-full' src="./girl.jpeg" alt="" />
              <span>Susan carol</span>
            </td>
            <td>2 Jan 2021</td>
            <td>$122.00</td>
            <td className="text-red-600"><Button type="Decline"/></td>
          </tr>
          <tr className='flex justify-between items-center gap-10  my-2'>
            <td className="flex items-center">
              <img className='w-12 h-12 rounded-full' src="./girl.jpeg" alt="" />
              <span>Susan carol</span> 
            </td>
            <td>2 Jan 2021</td>
            <td>$122.00</td>
            <td className='text-[blue]'><Button type="Approved"/></td>
          </tr>
          <tr className='flex justify-between items-center gap-10  my-2'>
            <td className="flex items-center">
              <img className='w-12 h-12 rounded-full' src="./girl.jpeg" alt="" />
              <span>Susan carol</span>
            </td>
            <td>2 Jan 2021</td>
            <td>$122.00</td>
            <td className="text-red-600"><Button type="Decline"/></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

Wedgetlrg.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Wedgetlrg;
