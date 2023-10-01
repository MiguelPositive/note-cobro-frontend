import React from "react";

import { useContext } from "react";
import { store } from "../context/Context";

import Button from "./Button";

const AddDebtorButton = () => {
  const { setActiveModal } = useContext(store);

  const handleClick = () => {
    setActiveModal(true);
  };

  return (
    <Button
      bgColor={"bg-custom-blue"}
      icon={"bi bi-person-fill-add"}
      iconSize={"text-lg"}
      height={"h-[3rem]"}
      onClick={handleClick}
    >
      NUEVO DEUDOR
    </Button>
  );
};

export default AddDebtorButton;
