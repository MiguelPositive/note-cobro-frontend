import React, { useState } from "react";
import Input from "./Input";

import { useContext } from "react";
import { store } from "../context/Context";

const UserInput = ({ onKeyUp }) => {
  const { user, setUser } = useContext(store);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <Input
      value={user}
      placeholder={"Usuario"}
      type={"text"}
      icon={"bi bi-person-circle"}
      colorWarnig={"text-red-800"}
      onChange={handleChange}
      onKeyUp={onKeyUp}
    />
  );
};

export default UserInput;
