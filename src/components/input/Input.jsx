import React from "react";
import { useState } from "react";

const Input = ({ placeholder, type, icon, onClick, showPassword, cursor }) => {
  return (
    <div className="relative">
      <input
        className={`h-[3rem] w-full border-[1px] border-gray-400 rounded-md
         focus:outline-none text-black font-semibold pr-3 pl-3`}
        placeholder={placeholder}
        type={showPassword ? "text" : type}
      />

      {icon && (
        <i
          className={`absolute text-black top-3 right-2 opacity-70 
          ${showPassword ? "bi bi-eye-fill" : icon}
           ${cursor}`}
          onClick={onClick}
        ></i>
      )}
    </div>
  );
};

export default Input;
