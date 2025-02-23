import React from "react";

const Select = ({ options, onChange }) => {
  return (
    <select
      className="border border-gray-300 p-3 rounded-lg w-full shadow-md focus:ring focus:ring-blue-300 transition-all duration-200"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select a service</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
