import React from 'react'
import { Doughnut } from "react-chartjs-2";
 
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const DoughnutBox = () => {

  const data1 = {
    labels: ["NFT", "Social Media", "Websites"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  

  
  return (
    <div className='d-flex justify-content-center ' >
      <Doughnut data={data1} width={300} height={300} />
    </div>
  )
}

export default DoughnutBox