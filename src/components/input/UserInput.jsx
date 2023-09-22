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
      placeholder={"USUARIO"}
      type={"text"}
      icon={"bi bi-person-circle"}
      onChange={handleChange}
      onKeyUp={onKeyUp}
      value={user}
    />
  );
};

export default UserInput;
