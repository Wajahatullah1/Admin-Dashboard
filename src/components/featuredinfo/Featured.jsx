import React from 'react'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'

function Featured() {
    const shadow =({
        boxShadow: 'rgba(0 , 0,0,0.75) 0px 0px 15px -10px',
    })
  return (
   <div className="Feature flex justify-between mt-3">
    <div className="featureitem   p-4 " style={shadow}>
        <span className="featuredtittle">
            Revanue
        </span>
<div className="moneycontain flex gap-3 items-center">
    <span className="featuredmony text-3xl">$2,423</span>
    <span className="featuredmpneyrev flex items-center">
 -11.4 <ArrowDownward className='text-[brown] '/>
    </span>
</div>
<span className='text-sm text-gray-400'>Compare to last month</span>
    </div>
    <div className="featureitem shadow-md origin-top  p-4 "style={shadow}>
        <span className="featuredtittle">
            Sales
        </span>
<div className="moneycontain flex gap-3 items-center">
    <span className="featuredmony text-3xl">$2,111</span>
    <span className="featuredmpneyrev">
 -10.4 <ArrowDownward className='text-[brown]'/>
    </span>
</div>
<span className='text-sm text-gray-400'>Compare to last month</span>

    </div>
    <div className="featureitem shadow-2xl w p-4 "style={shadow}>
        <span className="featuredtittle ">
            Cost
        </span>
<div className="moneycontain flex gap-3 items-center">
    <span className="featuredmony text-3xl">$2,233</span>
    <span className="featuredmpneyrev">
 23.4 <ArrowUpward className='text-[green] text-sm'/>
    </span>
</div>
<span className='text-sm text-gray-400'>Compare to last month</span>

    </div>
   </div>
  )
}


export default Featured