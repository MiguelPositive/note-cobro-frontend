import React from "react";

import Button from "./Button";

const ManageAlertsButton = () => {
  return (
    <div>
      <Button
        bgColor="bg-custom-organge"
        icon={"bi bi-phone-vibrate-fill"}
        iconSize={"text-3xl"}
        center={"justify-center"}
        mr={"mr-2"}
        rounded={"rounded-md"}
      >
        Gestionar alertas
      </Button>
    </div>
  );
};

export default ManageAlertsButton;

// boton de gestionar alertas
