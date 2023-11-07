import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Title from "../titles/Title";
import SignOffButton from "../buttons/SignOffButton";
import AddDebtorButton from "../buttons/AddDebtorButton";
import FilterInput from "../input/FilterInput";
import AddDebtorModal from "../modals/AddDebtorModal";

import DebtorsTable from "../tables/DebtorsTable";

const Dashboard = () => {
  useEffect(() => {
    getDebtors();
  }, []);

  const { activeModal, getDebtors, debtorsCopy } = useContext(store);

  return (
    <>
      <div
        className={`${activeModal && "blur-sm"} 
        custom-scroll w-[100vw] h-[100vh] realtive pt-5 pl-4 pr-4  animate__animated animate__fadeIn animate__faster`}
        style={{ scrollbarGutter: "stable", overflow: "auto" }}
      >
        <div id="title-and-signoff-button" className="mb-5">
          <div className="flex justify-between items-start relative 900px:justify-center">
            <Title title={"NOTE COBRO"} titleColor={"text-white"} />
            <div className="900px:absolute 900px:right-0">
              <SignOffButton />
            </div>
          </div>
        </div>

        <div id="add-and-filter-deptors" className="flex justify-between gap-2">
          <div className="w-full">
            <FilterInput />
          </div>
          <AddDebtorButton />
        </div>
        <div className="w-full flex flex-col gap-5 pt-5 pb-8">
          {debtorsCopy.map((debtor) => (
            <React.Fragment key={debtor._id}>
              <DebtorsTable debtor={debtor} />
            </React.Fragment>
          ))}
        </div>
      </div>

      <AddDebtorModal />
    </>
  );
};

export default Dashboard;
