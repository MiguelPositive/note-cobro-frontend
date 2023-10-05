import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const ProductValueInput = () => {
  const { productValue, setProductValue } = useContext(store);

  const handleChange = (e) => {
    setProductValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <Input
      value={productValue}
      placeholder={"Precio por unidad"}
      type={"number"}
      icon={"bi bi-currency-dollar"}
      colorWarnig={"text-white"}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default ProductValueInput;
