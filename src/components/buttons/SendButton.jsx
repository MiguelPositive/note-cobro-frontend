import React from "react";


import Button from "./Button";


const SendButton = ({ onClick }) => {
 

  return (
    <Button
      icon={"bi bi-check-lg"}
      iconSize={"text-xl"}
      rounded={"rounded-full"}
      bgColor={"bg-[#61A14E]"}
      center={"justify-center"}
      onClick={onClick}
    >
    
    </Button>
  );
};

export default SendButton;
