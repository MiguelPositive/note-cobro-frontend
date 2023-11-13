import React from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { store } from "../context/Context";

import HeaderDebtorMenu from "../headers/HeaderDebtorMenu";
import ProductsTable from "../tables/ProductsTable";

const ProductsDetails = () => {
  const { totalPrice, products, setProducts } = useContext(store);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/debtor-menu");
  };

  return (
    <div className="pl-5 pr-5 custom-scroll w-[100vw] h-[100vh] animate__animated animate__fadeIn animate__faster overflow-auto">
      <HeaderDebtorMenu onClick={handleNavigate} />

      <div className="mb-5 text-2xl">
        Total: <span className="font-semibold">{totalPrice}</span>
      </div>

      {products && (
        <div className="w-full flex flex-col gap-5 pt-2 pb-32 900px:pb-8">
          {products.map((product) => (
            <React.Fragment key={product.productName}>
              <ProductsTable data={product} />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;
