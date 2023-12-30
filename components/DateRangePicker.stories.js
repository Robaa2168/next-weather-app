import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';


const MockParent = ({ children }) => {
  const [startDate, setStartDate] = useState("2020-07-01T12:00");
  const [endDate, setEndDate] = useState("2020-07-02T12:00");

  const handleSubmit = (dates) => {
    console.log("Submitted Dates: ", dates);
  };

  return children(startDate, endDate, setStartDate, setEndDate, handleSubmit);
};

export default {
  title: 'Date Range Picker',
  component: DateRangePicker,
};

const Template = (args) => (
  <MockParent>
    {(startDate, endDate, setStartDate, setEndDate, handleSubmit) => (
      <DateRangePicker
        onSubmit={handleSubmit}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        {...args}
      />
    )}
  </MockParent>
);

export const Default = Template.bind({});
Default.args = {};
