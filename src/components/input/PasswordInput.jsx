import React from "react";
import { useState } from "react";

import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const PasswordInput = ({ onKeyUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  const { password, setPassword } = useContext(store);

  const handleClick = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Input
      value={password}
      placeholder={"Contraseña"}
      type={"password"}
      icon={"bi bi-eye-slash-fill"}
      showPassword={showPassword}
      cursor={"cursor-pointer"}
      colorWarnig={"text-red-800"}
      onClick={handleClick}
      onChange={handleChange}
      onKeyUp={onKeyUp}
    />
  );
};

export default PasswordInput;
