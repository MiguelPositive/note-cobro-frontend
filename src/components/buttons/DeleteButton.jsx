import React from "react";
import Button from "./Button";

const DeleteButton = ({ onClick }) => {
  return (
    <Button
      bgColor={"bg-custom-red"}
      icon={"bi bi-trash3-fill"}
      rounded={"rounded-full"}
      iconSize={"text-sm"}
      onClick={onClick}
    ></Button>
  );
};

export default DeleteButton;
