// components/WeatherGraph.js
import React from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';


Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherChart = ({ weatherData }) => {
  const chartData = {
    labels: weatherData.map(data => new Date(data.dt_iso).toLocaleTimeString()),
    datasets: [
      {
        label: 'Temperature',
        data: weatherData.map(data => data.temperature),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            callback: function(value) {
              return value + '°C'; 
            },
          },
        },
      ],
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default WeatherChart;
