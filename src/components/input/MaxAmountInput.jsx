import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const MaxAmountInput = () => {
  const { setMaxAmount, maxAmount } = useContext(store);

  const handleChangeMaxAmount = (e) => {
    setMaxAmount(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key == "-") {
      e.preventDefault();
    }
  };

  return (
    <Input
      value={maxAmount}
      placeholder={"Monto maximo"}
      type={"number"}
      colorWarnig={"text-white"}
      cursor={"cursor-none"}
      onChange={handleChangeMaxAmount}
      onKeyDown={handleKeyDown}
    />
  );
};

export default MaxAmountInput;
