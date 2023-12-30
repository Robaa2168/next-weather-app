import React from 'react';

const WeatherDataList = ({ weatherData }) => {
  return (
    <div className="max-h-60 overflow-y-auto p-4 bg-white rounded-lg shadow">
      <ul className="list-disc space-y-2">
        {weatherData.map((data, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm">
            <span className="font-medium text-gray-700">{new Date(data.dt_iso).toLocaleString()}</span>
            <span className="font-semibold text-blue-600">{data.temperature}°C</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherDataList;
