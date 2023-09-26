import React from "react";

import AppTitle from "../titles/AppTitle";
import SignOffButton from "../buttons/SignOffButton";
import AddDebtorButton from "../buttons/AddDebtorButton";


const Dashboard = () => {
  return (
    <div className="pt-5 pl-4 pr-4">
      <div className="flex justify-between items-start 450px:relative 450px:justify-center">
        <AppTitle titleColor={"text-white"} />
        <div className="450px:absolute 450px:right-0">
          <SignOffButton />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
