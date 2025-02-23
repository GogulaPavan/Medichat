import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 w-96 text-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
