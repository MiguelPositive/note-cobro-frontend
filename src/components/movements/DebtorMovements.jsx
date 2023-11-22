import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

const DebtorMovements = () => {
  const { debtorTemp, setDebtorTemp } = useContext(store);

  return (
    <div className="">
      <div className="font-bold p-2">
        <i className="bi bi-coin"></i> Deuda Actual: {debtorTemp.totalPrice}
      </div>

      <div className="p-2 overflow-auto flex flex-wrap justify-evenly gap-5">
        {debtorTemp.debt.map((d) => (
          <div className="bg-black/20 rounded-md mt-2 mb-2 p-4 w-[15rem] 370px:w-[20rem]">
            <div className="mb-2 rounded-full bg-custom-blue text-center 450px:flex 450px:justify-between p-2 font-semibold">
              <i className="bi bi-calendar-event-fill mr-2 "></i>
              <span>Fecha del credito: </span>
              {d.creditDate}
            </div>

            <div className="">
              {d.products.map((product) => (
                <div
                  className="flex justify-start flex-wrap gap-3"
                  key={product.productName}
                >
                  <div className="text-center">
                    Producto: {product.productName}
                  </div>
                  <div className="text-center">
                    Precio unidad: {product.unitPrice}
                  </div>
                  <div className="text-center">
                    Cantidad: {product.productsQuantity}
                  </div>
                  <div className="text-center">
                    subtotal: {product.unitPrice * product.productsQuantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebtorMovements;
