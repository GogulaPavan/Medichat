import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
