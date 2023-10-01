import React from "react";

import Modal from "./Modal";

const AddDebtorModal = () => {
  return (
    <>
      <Modal w={"w-[30rem]"} title={"AGREGAR DEUDOR"}>
        <p className="p-2 text-center">AUN ESTAMOS TRABAJANDO</p>
        <div className="flex justify-center items-center">
          <img
            src="https://media.tenor.com/-sf6x0QOhHwAAAAi/panic-anime.gif"
            alt=""
          />
        </div>
      </Modal>
    </>
  );
};

export default AddDebtorModal;