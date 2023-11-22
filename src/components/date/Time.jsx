import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

const Time = () => {
  const { setPayHour, setPayMinute } = useContext(store);

  const handleChangeHour = (e) => {
    let hour = e.target.value;

    let date = new Date(`1970-01-01T${hour}`);

    setPayHour(date.getHours());
    setPayMinute(date.getMinutes());
  };
  return (
    <input
      className="w-full text-black rounded-md"
      type="time"
      onChange={handleChangeHour}
    />
  );
};

export default Time;
