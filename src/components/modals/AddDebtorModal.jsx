import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Modal from "./Modal";
import NameInput from "../input/NameInput";
import CedulaInput from "../input/CedulaInput";
import ContactInput from "../input/ContactInput";
import EmailInput from "../input/EmailInput";
import Button from "../buttons/Button";
import Loader from "../loader/Loader";

import emptyFields from "../alerts/emptyFields";

const AddDebtorModal = () => {
  const style = "w-full mb-5";

  const {
    name,
    cedula,
    contact,
    email,
    createDebtor,
    activeLoader,
    setActiveLoader,
  } = useContext(store);

  const sendData = () => {
    if (!name || !cedula || !contact || !email) {
      emptyFields();
    } else {
      setActiveLoader(true);
      createDebtor(name, cedula, contact, email);
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      sendData();
    }
  };

  return (
    <>
      <Modal
        w={"w-[17rem] 350px:w-[22rem] 400px:w-[23rem] 450px:w-[25rem]"}
        title={"Agregar deudor"}
      >
        <div className="flex justify-center items-center flex-wrap pl-5 pr-5 350px:pl-8 350px:pr-8 400px:pl-10 400px:pr-10">
          <div className={`${style}`}>
            <NameInput onKeyUp={handleKeyUp} />
          </div>
          <div className={`${style}`}>
            <CedulaInput onKeyUp={handleKeyUp} />
          </div>
          <div className={`${style}`}>
            <ContactInput onKeyUp={handleKeyUp} />
          </div>
          <div className={`${style}`}>
            <EmailInput onKeyUp={handleKeyUp} />
          </div>

          <div className={"w-[50%] mb-8"}>
            <Button
              bgColor={"bg-custom-blue"}
              onClick={sendData}
              center={"justify-center"}
              rounded={"rounded-md"}
            >
              {activeLoader ? (
                <Loader color={"text-white"} size={"text-lg"} />
              ) : (
                "Registrar"
              )}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddDebtorModal;
