import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const FilterInput = () => {
  const { setDebtorsCopy, debtors } = useContext(store);

  const [value, setValue] = useState("");

  let newDebtors = [];

  const filter = () => {
    newDebtors = debtors.filter((debtor) => {
      if (
        debtor.name.includes(value) ||
        debtor.cedula.toString().includes(value)
      ) {
        return debtor;
      }
    });

    if (value == "") {
      setDebtorsCopy(debtors);
    } else {
      setDebtorsCopy(newDebtors);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };



  useEffect(() => {
    setTimeout(() => {
      filter();
    }, 100);

  }, [value]);

  return (
    <Input
      placeholder={"Nombre o cedula"}
      icon={"bi bi-search"}
      onChange={handleChange}

    />
  );
};

export default FilterInput;
