import React from "react";

import Button from "./Button";

const AddDebtorButton = () => {
  const handleClick = () => {
    alert("se agrego un deudor");
  };

  return (
    <Button
      bgColor={"bg-custom-blue"}
      icon={"bi bi-person-fill-add"}
      iconSize={"text-lg"}
      onClick={handleClick}
    >
      NUEVO DEUDOR
    </Button>
  );
};

export default AddDebtorButton;
