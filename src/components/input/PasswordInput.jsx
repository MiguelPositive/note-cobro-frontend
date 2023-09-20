import React from "react";
import { useState } from "react";

import Input from "./Input";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <Input
      placeholder={"CONTRASEÑA"}
      type={"password"}
      icon={"bi bi-eye-slash-fill"}
      onClick={handleClick}
      showPassword={showPassword}
      cursor={"cursor-pointer"}
    />
  );
};

export default PasswordInput;
