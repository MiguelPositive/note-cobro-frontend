import React from "react";

import Modal from "./Modal";
import NameInput from "../input/nameInput";
import CedulaInput from "../input/CedulaInput";
import ContactInput from "../input/ContactInput";
import EmailInput from "../input/EmailInput";
import Button from "../buttons/Button";
import ProductNameInput from "../input/ProductNameInput";
import ProductValueInput from "../input/ProductValueInput";
import ProductUnitsInput from "../input/ProductUnitsInput";

const AddDebtorModal = () => {
  const style = "w-full mb-5";

  return (
    <>
      <Modal
        w={"w-[17rem] 350px:w-[22rem] 400px:w-[23rem] 450px:w-[25rem]"}
        title={"AGREGAR DEUDOR"}
      >
        <div className="flex justify-center items-center flex-wrap pl-5 pr-5 350px:pl-8 350px:pr-8 400px:pl-10 400px:pr-10">
          <div className={`${style}`}>
            <NameInput />
          </div>
          <div className={`${style}`}>
            <CedulaInput />
          </div>
          <div className={`${style}`}>
            <ContactInput />
          </div>
          <div className={`${style}`}>
            <EmailInput />
          </div>

          <div className={"w-[50%] mb-8"}>
            <Button bgColor={"bg-custom-blue"}>REGISTRAR</Button>
          </div>
        </div>

        {/* <p className="p-2 text-center">AUN ESTAMOS TRABAJANDO</p>

        <div className="flex justify-center items-center">
          <img
            src="https://media.tenor.com/-sf6x0QOhHwAAAAi/panic-anime.gif"
            alt=""
          />
        </div> */}
      </Modal>
    </>
  );
};

export default AddDebtorModal;
