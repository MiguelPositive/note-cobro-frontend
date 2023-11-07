import React from "react";
import { useState } from "react";

import { useContext } from "react";
import { store } from "../context/Context";

import { useNavigate } from "react-router-dom";

const DebtorsTable = ({ debtor }) => {
  const { debtorTemp, setDebtorTemp } = useContext(store);

  const [showInfo, setShowInfo] = useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    if (showInfo === null) {
      setShowInfo(true);
    } else if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  };

  const handleDebtorTemp = () => {
    setDebtorTemp(debtor);

    navigate("/debtor-menu");
  };

  return (
    <div className="w-full bg-[#C0C0C3] bg-opacity-20 border-white/10 border-[1px]  shadow-sm shadow-black/80 transition-all duration-100 rounded-md hover:shadow-lg hover:scale-[101%]">
      <div
        className="ml-5 cursor-pointer flex items-center justify-between"
        onClick={handleClick}
      >
        <span>{debtor.name}</span>
        <i
          className={`bi bi-arrow-up-short text-2xl transition-all duration-100
      ${showInfo ? "rotate-180" : ""}`}
        ></i>
      </div>

      <div
        className={`pl-5 pr-5 flex flex-col 900px:flex-wrap cursor-pointer 900px:justify-between 900px:items-center 
    ${
      showInfo ? "h-[10rem] border-t-[1px] mt-2 pt-3 900px:h-[5rem]" : "h-0"
    } transition-all duration-75 overflow-hidden hover:bg-custom-blue`}
        onClick={handleDebtorTemp}
      >
        <div className="mt-5 mb-5 900px:mt-0">
          <div className="font-semibold 900px:text-center">Cedula</div>
          {debtor.cedula}
        </div>
        <div className="mb-5">
          <div className="font-semibold 900px:text-center"> Telefono</div>
          {debtor.contact}
        </div>
        <div className="mb-5">
          <div className="font-semibold 900px:text-center">Correo</div>
          {debtor.email}
        </div>
      </div>
    </div>
  );
};

export default DebtorsTable;
