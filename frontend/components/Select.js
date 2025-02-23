import React from "react";

const Select = ({ options, onChange }) => {
  return (
    <select
      className="border border-gray-300 p-2 rounded w-full"
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
