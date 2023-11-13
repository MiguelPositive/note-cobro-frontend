import React from "react";

import Button from "./Button";
import useScreenSize from "../../hooks/useScreenSize";

import exit from "../alerts/exit";

const SignOffButton = () => {
  const { width } = useScreenSize();

  const handleClick = () => {
    exit();
  };

  return (
    <div className="w-[2.5rem] h-[3rem] 900px:w-full 900px:h-full">
      <Button
        bgColor={"bg-custom-red"}
        bgOpacity={"bg-opacity-90"}
        icon={"bi bi-box-arrow-right"}
        responsive={true}
        onClick={handleClick}
        center={"justify-around"}
        mr={"900px:mr-2"}
        rounded={"rounded-md"}
      >
        {width >= 900 ? "Salir" : ""}
      </Button>
    </div>
  );
};

export default SignOffButton;
