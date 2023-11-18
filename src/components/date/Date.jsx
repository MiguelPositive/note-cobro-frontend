import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";
import { useState } from "react";
import { useEffect } from "react";

import { Datepicker } from "flowbite-react";


const SelectDay = () => {
  const { setPayDay, setPayMonth } = useContext(store);

  const handleChangeSelect = (date) => {
    let currentDate = new Date(date);

    setPayDay(currentDate.getDate());
    setPayMonth(currentDate.getMonth());
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Datepicker
        onSelectedDateChanged={handleChangeSelect}
        language="es-ES"
        minDate={new Date()}
        labelTodayButton="Hoy"
        labelClearButton="Limpiar"
      />
    </div>
  );
};

export default SelectDay;
