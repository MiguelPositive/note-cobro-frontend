import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

const Time = () => {
  const { setPayHour } = useContext(store);

  const handleChangeHour = (e) => {
    setPayHour(e.target.value);
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
