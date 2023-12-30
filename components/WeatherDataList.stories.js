import React from 'react';
import WeatherDataList from './WeatherDataList';


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
];

export default {
  title: 'Weather Data List',
  component: WeatherDataList,
};

const Template = (args) => <WeatherDataList {...args} />;

export const Default = Template.bind({});
Default.args = {
  weatherData: mockWeatherData,
};
