import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const UnitPriceInput = ({onKeyUp}) => {
  const { unitPrice, setUnitPrice } = useContext(store);

  const handleChange = (e) => {
    setUnitPrice(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <Input
      value={unitPrice}
      placeholder={"Precio por unidad"}
      type={"number"}
      icon={"bi bi-currency-dollar"}
      colorWarnig={"text-white"}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onKeyUp={onKeyUp}
    />
  );
};

export default UnitPriceInput;
