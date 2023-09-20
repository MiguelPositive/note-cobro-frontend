import React from "react";

const AppTitle = ({ titleColor }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center rounded-full bg-custom-blue p-1 mr-2">
        <div className="w-[1.7rem] h-[1.7rem] bg-logo bg-cover opacity-50"></div>
      </div>
      <p className={`font-bold text-2xl opacity-70 ${titleColor} text-start`}>
        NOTE COBRO
      </p>
    </div>
  );
};

export default AppTitle;
