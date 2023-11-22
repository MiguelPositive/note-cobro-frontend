import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";
import { useNavigate } from "react-router-dom";

import DebtorsTable from "../tables/DebtorsTable";
import ManageAlertsButton from "../buttons/ManageAlertsButton";
import AddCreditButton from "../buttons/AddCreditButton";
import DebtorMovements from "../movements/DebtorMovements";
import AddCreditModal from "../modals/AddCreditModal";
import HeaderDebtorMenu from "../headers/HeaderDebtorMenu";
import ManageAlertsModal from "../modals/ManageAlertsModal";

const DebtorMenu = () => {
  const {
    debtorTemp,
    setDebtorTemp,
    activeModal,
    setActiveModal,
    alertsModal,
    setAlertsModal,
  } = useContext(store);

  const handleClick = () => {
    setActiveModal(true);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div
        className={`pl-5 pr-5 w-[100vw] h-[100vh] custom-scroll overflow-auto animate__animated animate__fadeIn animate__faster 
      ${activeModal || alertsModal ? "blur-sm" : ""}`}
      >
        <HeaderDebtorMenu onClick={handleNavigate} />

        <DebtorsTable data={debtorTemp} />

        <div
          id="buttons"
          className="mt-5 mb-5 flex flex-col gap-5 350px:flex-row 350px:justify-center"
        >
          <ManageAlertsButton
            onClick={() => {
              setAlertsModal(true);
            }}
          />

          <AddCreditButton onClick={handleClick} />
        </div>

        <div
          id="container-debtor-movements"
          className="bg-black/10 rounded-md shadow-md shadow-black/50 p-2 custom-scroll overflow-auto mb-72 flex justify-center"
        >
          <DebtorMovements />
        </div>
      </div>

      <AddCreditModal />
      <ManageAlertsModal />
    </>
  );
};

export default DebtorMenu;
