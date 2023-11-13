import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const ProductsQuantityInput = ({ onKeyUp }) => {
  const { productsQuantity, setProductsQuantity } = useContext(store);

  const handleChange = (e) => {
    setProductsQuantity(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <Input
      value={productsQuantity}
      placeholder={"Unidades del producto"}
      type={"number"}
      colorWarnig={"text-white"}
      icon={"bi bi-hash"}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onKeyUp={onKeyUp}
    />
  );
};

export default ProductsQuantityInput;
