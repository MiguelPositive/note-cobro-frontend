import React from "react";

import { useContext } from "react";
import { store } from "../components/context/Context";

const useVoidValidate = () => {
  const { productName, unitPrice, productsQuantity } =
    useContext(store);

  const creditValidate = () => {
    if (!productName || !unitPrice || !productsQuantity) {
      return true;
    } else {
      return false;
    }
  };

  return { creditValidate };
};

export default useVoidValidate;
