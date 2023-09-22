import React from "react";

import Button from "./Button";
import Loader from "../loader/Loader";

import { useContext } from "react";
import { store } from "../context/Context";

const LoginBoton = ({ onClick}) => {
  const { user, activeLoader } = useContext(store);

  return (
    <Button color={"bg-custom-blue"} onClick={onClick}>
      {activeLoader ? (
        <Loader color={"text-white"} size={"text-xl"} />
      ) : (
        "INGRESAR"
      )}
    </Button>
  );
};

export default LoginBoton;
