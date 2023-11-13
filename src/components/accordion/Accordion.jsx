import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import { useNavigate } from "react-router-dom";

import DeleteButton from "../buttons/DeleteButton";

const Accordion = ({
  children,
  object,
  debtor,
  productsList,
  hMobile,
  hDesktop,
  title,
}) => {
  const { setDebtorTemp, products, setProducts } = useContext(store);

  const [showInfo, setShowInfo] = useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    if (showInfo === null) {
      setShowInfo(true);
    } else if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  };

  const handleDebtorTemp = () => {
    if (debtor) {
      setDebtorTemp(object);
      navigate("/debtor-menu");
    }
  };

  

  const handleDeleteProduct = (value) => {
    let temp;

    temp = products.filter((product) => {
      return product.productName != value;
    });

  setProducts(temp);
  };

  return (
    <div className="w-full bg-[#C0C0C3] bg-opacity-20 border-white/10 border-[1px]  shadow-sm shadow-black/80 transition-all duration-100 rounded-md hover:shadow-lg hover:scale-[101%]">
      <div
        className="ml-5 cursor-pointer flex items-center justify-between"
        onClick={handleClick}
      >
        <span>{title}</span>

        {productsList ? (
          <div className="ml-auto mr-2 mt-1 mb-1 w-[2rem]">
            <DeleteButton
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteProduct(object.productName);
              }}
            />
          </div>
        ) : null}

        <i
          id="icon-arrow"
          className={`bi bi-arrow-up-short text-3xl transition-all duration-100 
        ${showInfo ? "rotate-180" : ""}`}
        ></i>
      </div>

      <div
        className={`pl-5 pr-5 flex flex-col 900px:flex-row cursor-pointer 900px:justify-between 900px:items-center 
      ${
        showInfo ? `${hMobile} border-t-[1px] mt-2 pt-3 ${hDesktop}` : "h-0"
      } transition-all duration-75 overflow-hidden 
      ${debtor ? "hover:bg-custom-blue" : ""}`}
        onClick={handleDebtorTemp}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
