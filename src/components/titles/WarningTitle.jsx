import React from "react";

const WarningTitle = ({ title, color, size }) => {
  return <div className={`${color} ${size} font-bold mt-2`}>{title}</div>;
};

export default WarningTitle;
