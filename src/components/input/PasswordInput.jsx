import React from "react";
import { useState } from "react";

import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const PasswordInput = () => {
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
      placeholder={"CONTRASEÑA"}
      type={"password"}
      icon={"bi bi-eye-slash-fill"}
      onClick={handleClick}
      onChange={handleChange}
      showPassword={showPassword}
      cursor={"cursor-pointer"}
      value={password}
    />
  );
};

export default PasswordInput;
