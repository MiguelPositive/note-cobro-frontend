import React from "react";

import Button from "./Button";
import useScreenSize from "../../hooks/useScreenSize";

const HomeButton = ({ onClick }) => {
  const { width } = useScreenSize();

  return (
    <div className="w-[2.5rem] h-[3rem] 900px:w-[6rem]">
      <Button
        bgColor={"bg-custom-blue"}
        responsive={true}
        icon={"bi bi-caret-left-fill"}
        mr={"ml-1 900px:mr-2"}
        onClick={onClick}
        rounded={"rounded-md"}
      >
        {width >= 900 ? "Volver" : ""}
      </Button>
    </div>
  );
};

export default HomeButton;
