import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Title from "../titles/Title";
import SignOffButton from "../buttons/SignOffButton";
import AddDebtorButton from "../buttons/AddDebtorButton";
import FilterInput from "../input/FilterInput";

import AddDebtorModal from "../modals/AddDebtorModal";

const Dashboard = () => {
  const { activeModal } = useContext(store);

  return (
    <>
      <div
        className={`${activeModal && "blur-sm"} 
        w-[100vw] h-[100vh] realtive  pt-5 pl-4 pr-4  animate__animated animate__fadeIn animate__faster`}
      >
        <div id="title-and-signoff-button" className="mb-5">
          <div className="flex justify-between items-start 450px:relative 450px:justify-center">
            <Title title={"NOTE COBRO"} titleColor={"text-white"} />
            <div className="450px:absolute 450px:right-0">
              <SignOffButton />
            </div>
          </div>
        </div>

        <div
          id="add-and-filter-deptors"
          className="flex justify-center flex-wrap 400px:flex-nowrap 400px:gap-4"
        >
          <div className="w-full mb-5">
            <FilterInput />
          </div>
          <div className="w-full flex justify-start 400px:justify-end 400px:w-[30%] 450px:w-full">
            <AddDebtorButton />
          </div>
        </div>
      </div>

      <AddDebtorModal />
    </>
  );
};

export default Dashboard;
