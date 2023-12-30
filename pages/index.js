import React, { useState, useEffect } from 'react';
import DateRangePicker from '../components/DateRangePicker';
import WeatherChart from '../components/WeatherChart';
import WeatherDataList from '../components/WeatherDataList';
import { useLazyQuery, gql } from '@apollo/client';

const GET_WEATHER = gql`
  query GetWeather($city: String!, $startDate: String!, $endDate: String!) {
    getWeather(city: $city, startDate: $startDate, endDate: $endDate) {
      temperature
      dt_iso
    }
  }
`;

const Home = () => {
  const [city] = useState('London');
  const [weatherData, setWeatherData] = useState([]);
  const [startDate, setStartDate] = useState('2020-07-01T00:00');
  const [endDate, setEndDate] = useState('2020-07-02T23:00');
  const [showChart, setShowChart] = useState(true);

  const [getWeather, { loading, error }] = useLazyQuery(GET_WEATHER, {
    variables: { city, startDate, endDate },
    onCompleted: (data) => {
      setWeatherData(data.getWeather);
      localStorage.setItem('lastWeatherData', JSON.stringify(data.getWeather));
    },
  });

  useEffect(() => {
    const lastData = localStorage.getItem('lastWeatherData');
    if (lastData) {
      setWeatherData(JSON.parse(lastData));
    }
  }, []);

  const handleSubmit = () => {
    getWeather({ variables: { city, startDate, endDate } });
  };

  const toggleView = () => setShowChart(!showChart);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-xl font-semibold text-gray-800">Weather App</h1>
          <DateRangePicker
            onSubmit={handleSubmit}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          {loading && <p className="text-center text-blue-500">Loading...</p>}
          {error && <p className="text-center text-red-500">Error: {error.message}</p>}
          <button
  onClick={toggleView}
  className={`mt-4 ${
    showChart
      ? 'bg-blue-500 hover:bg-blue-700'
      : 'bg-green-500 hover:bg-green-700'
  } text-white font-bold py-2 px-4 rounded`}
>
  {showChart ? "Show Previous Data" : "Show Chart"}
</button>

          <div className="mt-4">
            {showChart ? (
              <WeatherChart weatherData={weatherData} />
            ) : (
              <WeatherDataList weatherData={weatherData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
