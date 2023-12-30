import React from 'react';
import WeatherChart from './WeatherChart';


const mockWeatherData = [
    { dt_iso: "2020-07-01 00:00:00 +0000 UTC", temperature: 289.89 },
    { dt_iso: "2020-07-01 01:00:00 +0000 UTC", temperature: 289.27 },
    { dt_iso: "2020-07-01 02:00:00 +0000 UTC", temperature: 288.65 },
    { dt_iso: "2020-07-01 03:00:00 +0000 UTC", temperature: 287.12 },
    { dt_iso: "2020-07-01 04:00:00 +0000 UTC", temperature: 286.45 },
    { dt_iso: "2020-07-01 05:00:00 +0000 UTC", temperature: 285.23 },
    { dt_iso: "2020-07-01 06:00:00 +0000 UTC", temperature: 284.99 },
    { dt_iso: "2020-07-01 07:00:00 +0000 UTC", temperature: 286.14 },
    { dt_iso: "2020-07-01 08:00:00 +0000 UTC", temperature: 287.65 },
    { dt_iso: "2020-07-01 09:00:00 +0000 UTC", temperature: 289.05 },
    { dt_iso: "2020-07-01 10:00:00 +0000 UTC", temperature: 290.34 },
    { dt_iso: "2020-07-01 11:00:00 +0000 UTC", temperature: 291.88 },
    { dt_iso: "2020-07-01 12:00:00 +0000 UTC", temperature: 293.12 },
    { dt_iso: "2020-07-01 13:00:00 +0000 UTC", temperature: 294.56 },
    { dt_iso: "2020-07-01 14:00:00 +0000 UTC", temperature: 295.33 },
    { dt_iso: "2020-07-01 15:00:00 +0000 UTC", temperature: 294.22 },
    { dt_iso: "2020-07-01 16:00:00 +0000 UTC", temperature: 293.88 },
    { dt_iso: "2020-07-01 17:00:00 +0000 UTC", temperature: 292.99 },
    { dt_iso: "2020-07-01 18:00:00 +0000 UTC", temperature: 291.78 },
];

export default {
    title: 'Weather Chart',
    component: WeatherChart,
};

const Template = (args) => (
  <div className="p-4 bg-white rounded-lg shadow">
    <WeatherChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
    weatherData: mockWeatherData,
};
