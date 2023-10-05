import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const EmailInput = () => {
  const { email, setEmail } = useContext(store);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Input
      value={email}
      placeholder={"Correo"}
      icon={"bi bi-envelope-fill"}
      type={"email"}
      cursor={"cursor-default"}
      colorWarnig={"text-white"}
      onChange={handleChange}
    />
  );
};

export default EmailInput;
