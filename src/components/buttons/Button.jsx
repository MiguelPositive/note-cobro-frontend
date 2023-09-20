import React from "react";

const Button = ({ children, color, icon }) => {
  return (
    <div
      className={`${color} rounded-md p-2 text-center font-bold shadow-sm shadow-black/50 transition-all duration-150 cursor-pointer flex
     justify-around items-center hover:shadow-md hover:shadow-black/60 `}
    >
      {icon && <i className={icon}></i>}

      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
};

export default Button;

