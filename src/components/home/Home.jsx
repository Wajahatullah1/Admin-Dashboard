import React from 'react'
import Featured from '../featuredinfo/Featured'
import Chart from '../chart/Chart'
import { UserData } from '../../DummyData'
import Wedgetsm from '../wedgetsm/Wedgetsm'
import Wedgetlrg from '../wedgetlrg/Wedgetlrg'

const Home = () => {
  return (
    <div>
         <Featured/>
         <Chart data={UserData} tittle="Sales Analysis" grid dataKey="Active user"/>
        <div className=" flex gap-3">
         <Wedgetsm/>
         <Wedgetlrg/>
         </div> 

    </div>
  )
}

export default Home