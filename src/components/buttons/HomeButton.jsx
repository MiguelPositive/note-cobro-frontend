import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import useScreenSize from "../../hooks/useScreenSize";

const HomeButton = () => {
  const { width } = useScreenSize();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="w-[2.5rem] h-[3rem] 900px:w-[6rem]">
      <Button
        bgColor={"bg-custom-blue"}
        responsive={true}
        icon={"bi bi-house-door-fill"}
        mr={"ml-1 900px:mr-2"}
        onClick={handleClick}
      >
        {width >= 900 ? "Volver" : ""}{" "}
      </Button>
    </div>
  );
};

export default HomeButton;
