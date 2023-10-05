import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const NameInput = ({ onKeyUp }) => {
  const { name, setName } = useContext(store);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Input
      value={name}
      placeholder={"Nombre completo"}
      icon={"bi bi-person-fill"}
      type={"text"}
      cursor={"cursor-default"}
      colorWarnig={"text-white"}
      onChange={handleChange}
      onKeyUp={onKeyUp}
    />
  );
};

export default NameInput;
