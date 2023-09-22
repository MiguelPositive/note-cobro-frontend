import React, { useState } from "react";
import Input from "./Input";

import { useContext } from "react";
import { store } from "../context/Context";

const UserInput = () => {
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
      value={user}
    />
  );
};

export default UserInput;
