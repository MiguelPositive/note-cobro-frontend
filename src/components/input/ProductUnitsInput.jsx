import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const ProductUnitsInput = () => {
  const { productUnits, setProductUnits } = useContext(store);

  const handleChange = (e) => {
    setProductUnits(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <Input
      value={productUnits}
      placeholder={"Unidades del producto"}
      type={"number"}
      colorWarnig={"text-white"}
      icon={"bi bi-hash"}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default ProductUnitsInput;
