import React from "react";

const Title = ({ color, colorOpacity, title }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center rounded-full bg-custom-blue p-1 mr-2">
        <div className="w-[1.7rem] h-[1.7rem] bg-logo bg-cover opacity-60"></div>
      </div>
      <p className={`p-1 font-bold text-xl 900px:text-2xl ${colorOpacity} ${color} text-start`}>
        {title}
      </p>
    </div>
  );
};

export default Title;
