import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const ProductNameInput = ({ onKeyUp }) => {
  const { productName, setProductName } = useContext(store);

  const handleChange = (e) => {
    setProductName(e.target.value);
  };

  return (
    <Input
      value={productName}
      placeholder={"Producto"}
      type={"text"}
      icon={"bi bi-basket3-fill"}
      cursor={"cursor-default"}
      colorWarnig={"text-white"}
      onChange={handleChange}
      onKeyUp={onKeyUp}
    />
  );
};

export default ProductNameInput;
