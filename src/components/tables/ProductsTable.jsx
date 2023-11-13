import React from "react";

import Accordion from "../accordion/Accordion";

const ProductsTable = ({ data,  }) => {
  return (
    <Accordion
      object={data}
      title={data.productName}
      debtor={false}
      productsList={true}
      hMobile={"h-[14rem]"}
      hDesktop={"900px:h-[10rem]"}
    >
      <div className="mb-5">
        <div className="font-semibold 900px:text-center">
          Precio del producto
        </div>
        {data.unitPrice}
      </div>
      <div className="mb-5">
        <div className="font-semibold 900px:text-center">Cantidad</div>
        {data.productsQuantity}
      </div>
      <div className="mb-5">
        <div className="font-semibold 900px:text-center">Subtotal</div>
        {data.unitPrice * data.productsQuantity}
      </div>
    </Accordion>
  );
};

export default ProductsTable;
