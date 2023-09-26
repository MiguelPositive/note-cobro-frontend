import React from "react";

const AppTitle = ({ color, colorOpacity }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center rounded-full bg-custom-blue p-1 mr-2">
        <div className="w-[1.7rem] h-[1.7rem] bg-logo bg-cover opacity-60"></div>
      </div>
      <p className={`font-bold text-2xl ${colorOpacity} ${color} text-start`}>
        NOTE COBRO
      </p>
    </div>
  );
};

export default AppTitle;
