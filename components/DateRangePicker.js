import React from 'react';

const DateRangePicker = ({ onSubmit, startDate, endDate, setStartDate, setEndDate }) => {
  const handleSubmit = () => {
    if (startDate && endDate) {
      onSubmit({ startDate, endDate });
    }
  };

  return (
    <div className="flex flex-col p-4 space-y-2 bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-2">
        <label htmlFor="start-date" className="text-gray-700">Start Date:</label>
        <input
          type="datetime-local"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          min="2020-07-01T00:00"
          max="2020-07-02T23:00"
          className="form-input block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="end-date" className="text-gray-700">End Date:</label>
        <input
          type="datetime-local"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          min="2020-07-01T00:00"
          max="2020-07-02T23:00"
          className="form-input block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Submit</button>
    </div>
  );
};

export default DateRangePicker;
