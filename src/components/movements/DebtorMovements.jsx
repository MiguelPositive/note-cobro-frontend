import React from "react";

import { useContext } from "react";
import { store } from "../context/Context";

const DebtorMovements = () => {
  const { debtorTemp, setDebtorTemp } = useContext(store);

  return <div className="bg-black/20 rounded-md p-2">

    <div>
      <span className="font-bold">Fecha de la transaccion: </span> <div></div>
    </div>
  </div>;
};

export default DebtorMovements;
