import React from "react";

import WarningTitle from "../titles/WarningTitle";

const Input = ({
  placeholder,
  sizePlaceholder,
  type,
  icon,
  showPassword,
  cursor,
  value,
  onClick,
  onChange,
  onKeyUp,
}) => {
  return (
    <div>
      <div className="relative">
        <input
          className={`h-[3rem] w-full border-[1px] border-gray-400 rounded-md
         focus:outline-none text-black font-semibold
          ${icon == "" ? "pr-3" : "pr-7"} pl-3 ${sizePlaceholder}`}
          placeholder={placeholder}
          type={showPassword ? "text" : type}
          onChange={onChange}
          onKeyUp={onKeyUp}
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

      {value == "" ? (
        <WarningTitle
          color={"text-red-800"}
          size={"text-md"}
          title={"Debe llenar el campo"}
        />
      ) : null}
    </div>
  );
};
export default Input;
