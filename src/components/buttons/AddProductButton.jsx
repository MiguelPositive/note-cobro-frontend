import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Button from "./Button";

const AddProductButton = ({onClick}) => {
  const { activeLoader } = useContext(store);

  return (
    <Button bgColor={"bg-custom-blue"} rounded={"rounded-md"} center={"justify-center"} height={"h-[3rem]"} onClick={onClick}>
      {activeLoader ? (
        <>
          <Loader color={"text-white"} size={"text-2xl"} />
        </>
      ) : (
        "Agregar producto"
      )}
    </Button>
  );
};

export default AddProductButton;
