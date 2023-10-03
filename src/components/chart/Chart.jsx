import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'; // Import PropTypes




const Chart = ({tittle,data , dataKey, grid}) => {
    const shadow =({
        boxShadow: 'rgba(0 , 0,0,0.75) 0px 0px 15px -10px',
    })
   
return (
  <div className="chart mt-3" style={shadow}>
    <h3 className="tittle text-[25px]">{tittle}</h3>
    <ResponsiveContainer width="100%" aspect={4/ 1} >
      <LineChart data={data}>
        <XAxis dataKey="name" stroke='#5550db' />
        <Tooltip/>
        <CartesianGrid stroke='#e0dfdf'/>
      { grid && <Line type="monotone" dataKey={dataKey} stroke="#5550db" />}
      </LineChart>
    
    </ResponsiveContainer>
  </div>
);
};
Chart.propTypes ={
  tittle: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  dataKey:PropTypes.string.isRequired,
  grid: PropTypes.string.isRequired,
}
export default Chart