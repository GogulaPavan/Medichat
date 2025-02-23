import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
