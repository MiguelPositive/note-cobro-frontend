import React from "react";

import Button from "./Button";

import { useContext } from "react";
import { store } from "../context/Context";

const LoginBoton = ({ onClick }) => {
  const { user } = useContext(store);

  return (
    <Button color={"bg-custom-blue"} onClick={onClick}>
      INGRESAR
    </Button>
  );
};

export default LoginBoton;
