import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const ProductNameInput = () => {
  const { nameProduct, setNameProduct } = useContext(store);

  const handleChange = (e) => {
    setNameProduct(e.target.value);
  };

  return (
    <Input
      value={nameProduct}
      placeholder={"Producto"}
      type={"text"}
      icon={"bi bi-basket3-fill"}
      cursor={"cursor-default"}
      colorWarnig={"text-white"}
      onChange={handleChange}
    />
  );
};

export default ProductNameInput;
