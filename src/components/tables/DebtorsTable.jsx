import React from "react";

import Accordion from "../accordion/Accordion";

const DebtorsTable = ({ data }) => {
  return (
    <Accordion
      object={data}
      debtor={true}
      hMobile={"h-[14rem]"}
      hDesktop={"900px:h-[5rem]"}
      title={data.name}
    >
      <div className="mt-5 mb-5 900px:mt-0">
        <div className="font-semibold 900px:text-center">Cedula</div>
        {data.cedula}
      </div>
      <div className="mb-5">
        <div className="font-semibold 900px:text-center"> Telefono</div>
        {data.contact}
      </div>
      <div className="mb-5">
        <div className="font-semibold 900px:text-center">Correo</div>
        {data.email}
      </div>
    </Accordion>
  );
};

export default DebtorsTable;
