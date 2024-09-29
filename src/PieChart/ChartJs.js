import axios from "axios";
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

import {useState} from 'react';

const datasource = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: ['#ffcd56', 
                        '#ff6384', 
                        '#36a2eb', 
                        '#cd56ff', 
                        '#6384ff', 
                        '#a2eb36', 
                        '#56ffcd'],
    },
  ],
};



function ChartJs() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  axios.get('http://localhost:3000/budget')
  .then((res) => {
    for (let i = 0; i < res.data.myBudget.length; i++) {
      datasource.datasets[0].data[i] = res.data.myBudget[i].budget;
      datasource.labels[i] = res.data.myBudget[i].title;
    }
    setData(datasource);
    setLoading(false)
  });
  
  if (loading) {
    return(
      <div className="text-box">
        <h1>Chart</h1>
        <p>
            Loading...
        </p>
      </div>
    )
  }

  return (
    <div className="text-box">
     <h1>Chart</h1>
      <p>
          <Pie data={data} 
          height="200px"
          width="200px"
          options={{ maintainAspectRatio: false }}
          />
      </p>
    </div>
  );
}

export default ChartJs;