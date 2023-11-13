import React from "react";
import useScreenSize from "../../hooks/useScreenSize";

import { useContext } from "react";
import { store } from "../context/Context";

import Button from "./Button";

const AddDebtorButton = () => {
  const { setActiveModal } = useContext(store);

  const { width } = useScreenSize();

  const handleClick = () => {
    setActiveModal(true);
  };

  return (
    <Button
      bgColor={"bg-custom-blue"}
      icon={"bi bi-person-fill-add"}
      iconSize={"text-xl"}
      height={"h-[3rem]"}
      onClick={handleClick}
      center={"justify-around"}
      rounded={"rounded-md"}
    >
      {width >= 900 ? "Nuevo deudor" : null}
    </Button>
  );
};

export default AddDebtorButton;
