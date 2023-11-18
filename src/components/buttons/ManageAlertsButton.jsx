import React from "react";

import Button from "./Button";

const ManageAlertsButton = ({ onClick }) => {
  return (
    <div>
      <Button
        bgColor="bg-custom-organge"
        icon={"bi bi-phone-vibrate-fill"}
        iconSize={"text-3xl"}
        center={"justify-center"}
        mr={"mr-2"}
        rounded={"rounded-md"}
        onClick={onClick}
      >
        Gestionar alertas
      </Button>
    </div>
  );
};

export default ManageAlertsButton;

// boton de gestionar alertas
