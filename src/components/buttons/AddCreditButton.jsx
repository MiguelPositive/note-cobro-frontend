import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Button from "./Button";

const AddCreditButton = () => {
  const { activeModal, setActiveModal } = useContext(store);

  const handleClick = () => {
    setActiveModal(true);
  };

  return (
    <div>
      <Button
        bgColor={"bg-custom-blue"}
        center={"justify-center"}
        icon={"bi bi-currency-dollar"}
        iconSize={"text-3xl"}
        onClick={handleClick}
      >
        Agregar credito
      </Button>
    </div>
  );
};

export default AddCreditButton;
