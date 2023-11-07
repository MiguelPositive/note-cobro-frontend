import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Title from "../titles/Title";
import DebtorsTable from "../tables/DebtorsTable";
import ManageAlertsButton from "../buttons/ManageAlertsButton";
import AddCreditButton from "../buttons/AddCreditButton";
import SignOffButton from "../buttons/SignOffButton";
import HomeButton from "../buttons/HomeButton";
import DebtorMovements from "../movements/DebtorMovements";
import AddCreditModal from "../modals/AddCreditModal";

const DebtorMenu = () => {
  const { debtorTemp, setDebtorTemp, activeModal, setActiveModal } =
    useContext(store);

  return (
    <>
      <div className={`pl-5 pr-5 animate__animated animate__fadeIn animate__faster 
      ${activeModal ? "blur-sm":""}`}>
        <div
          className="mt-5 mb-5 flex justify-between 900px:justify-center"
          id="header"
        >
          <div className="900px:ml-auto">
            <Title title={"Menu del deudor"} />
          </div>

          <div
            id="buttons-header"
            className="relative flex justify-center gap-2 900px:static 900px:justify-around 900px:ml-auto"
          >
            <div className="450px:absolute 450px:top-0 450px:right-14 900px:static">
              <HomeButton />
            </div>

            <div className="450px:absolute 450px:top-0 450px:right-0 900px:static">
              <SignOffButton />
            </div>
          </div>
        </div>

        <DebtorsTable debtor={debtorTemp} />

        <div
          id="buttons"
          className="mt-5 mb-5 flex flex-col gap-5 350px:flex-row 350px:justify-center"
        >
          <ManageAlertsButton />

          <AddCreditButton />
        </div>

        <div
          id="container-debtor-movements"
          className="bg-black/10 rounded-md shadow-md shadow-black/50 p-2 flex flex-col 900px:flex-row"
        >
          <DebtorMovements />
          hola
        </div>
      </div>

      <AddCreditModal />
    </>
  );
};

export default DebtorMenu;
