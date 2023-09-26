import React from "react";

const Button = ({
  children,
  bgColor,
  bgOpacity,
  icon,
  iconSize,
  signoff,
  onClick,
}) => {
  return (
    <div
      className={`${bgColor} ${bgOpacity} 
      ${signoff ? "rounded-full 900px:rounded-md" : "rounded-md"} 
       p-2 text-center font-bold shadow-sm shadow-black/50 transition-all duration-150 cursor-pointer flex justify-around items-center hover:shadow-md hover:shadow-black/60 hover:scale-105`}
      onClick={onClick}
    >
      {icon && <i className={` ${children && "mr-2"} ${icon} ${iconSize}`}></i>}

      {children && (
        <div className="flex justify-center items-center">{children}</div>
      )}
    </div>
  );
};

export default Button;
