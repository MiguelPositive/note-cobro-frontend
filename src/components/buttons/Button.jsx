import React from "react";

const Button = ({
  children,
  bgColor,
  bgOpacity,
  icon,
  iconSize,
  height,
  responsive,
  isModal,
  onClick,
}) => {
  return (
    <div
      className={`${bgColor} ${bgOpacity} ${height}
      ${
        isModal &&
        `block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button`
      }
      ${responsive ? "rounded-full 900px:rounded-md" : "rounded-md"} 
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
