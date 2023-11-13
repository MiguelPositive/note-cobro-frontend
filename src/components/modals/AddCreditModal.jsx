import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Modal from "./Modal";
import ProductNameInput from "../input/ProductNameInput";
import UnitPriceInput from "../input/UnitPriceInput";
import ProductsQuantityInput from "../input/ProductsQuantity";
import useVoidValidate from "../../hooks/useVoidValidate";
import emptyFields from "../alerts/emptyFields";
import Button from "../buttons/Button";
import SendButton from "../buttons/SendButton";
import AddProductButton from "../buttons/AddProductButton";

import productExists from "../alerts/productExists";

const AddCreditModal = () => {
  const navigate = useNavigate();

  const { creditValidate } = useVoidValidate();

  const {
    setActiveLoader,
    debtorTemp,
    productName,
    addProducts,
    totalPrice,
    HiddenAddCredit,
    products,
    addDebt,
    cleanData,
  } = useContext(store);

  //el producto existe?

  const productisExists = () =>
    products.some((product) => {
      return product.productName == productName;
    });

  const listProducts = () => {
    if (creditValidate()) {
      emptyFields();
    } else if (productisExists()) {
      productExists();
    } else {
      addProducts();
    }
  };

  const handleListProducts = (e) => {
    if (e.keyCode == 13) {
      listProducts();
    }
  };

  const handleClick = () => {
    navigate("/products-details");
  };

  const handleSendAddDebt = () => {
    addDebt();

    setTimeout(() => {
      navigate("/dashboard");
      cleanData();
    }, 1000);
  };

  return (
    <div className={`${HiddenAddCredit ? "blur-sm" : ""}`}>
      <Modal w={"w-[17rem]"} title={"Agregar credito"}>
        <div className="flex flex-col gap-5 p-5">
          <ProductNameInput onKeyUp={handleListProducts} />
          <UnitPriceInput onKeyUp={handleListProducts} />
          <ProductsQuantityInput onKeyUp={handleListProducts} />
          <AddProductButton onClick={listProducts} />
          <div className="flex justify-between">
            <div
              className="text-xl"
              onClick={() => {
                console.log(debtorTemp.totalPrice);
              }}
            >
              Total:{" "}
              <span className="font-semibold">
                {totalPrice === null ? 0 : totalPrice}
              </span>
            </div>

            <Button
              bgColor={"bg-custom-organge"}
              rounded={"rounded-full"}
              onClick={handleClick}
            >
              Detalles
            </Button>
          </div>

          <div className="flex justify-center mb-5">
            <div className="w-[2.6rem] h-[1.5rem] ">
              <SendButton onClick={handleSendAddDebt} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddCreditModal;
