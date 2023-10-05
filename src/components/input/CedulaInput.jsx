import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const CedulaInput = ({ onKeyUp }) => {
  const { cedula, setCedula } = useContext(store);

  const handleChange = (e) => {
    setCedula(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <Input
      value={cedula}
      placeholder={"Cedula"}
      type={"number"}
      icon={"bi bi-person-vcard"}
      cursor={"cursor-default"}
      colorWarnig={"text-white"}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onKeyUp={onKeyUp}
    />
  );
};

export default CedulaInput;
