import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Button from "./Button";


const AddCreditButton = ({ onClick }) => {
  const { activeLoader, setActiveLoader } = useContext(store);

  return (
    <div>
      <Button
        bgColor={"bg-custom-blue"}
        center={"justify-center"}
        icon={activeLoader ? "" : "bi bi-currency-dollar"}
        iconSize={"text-3xl"}
        rounded={"rounded-md"}
        onClick={onClick}
      >
       
       Agregar credito
      </Button>
    </div>
  );
};

export default AddCreditButton;
