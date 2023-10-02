import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Button from "../buttons/Button";
import Title from "../titles/Title";

const Modal = ({ children, w }) => {
  const { activeModal, setActiveModal } = useContext(store);

  const [showModal, setShowModal] = useState("hidden");
  const [animation, setAnimation] = useState("animate__bounceIn");


  const handleClick = () => {
    setActiveModal(null);
  };

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (!activeModal) {
      setAnimation("animate__bounceOut");

      setTimeout(() => {
        setShowModal("hidden");
      }, 750);
    } else {
      setShowModal("");
      setAnimation("animate__bounceIn");
    }
  }, [activeModal]);

  return (
    <>
      <div
        id="backdrop"
        className={`
        ${showModal}
        absolute w-[100vw] h-[100vh] top-0 left-0 cursor-pointer flex justify-center items-center`}
        onClick={handleClick}
      >
        <div
          id="card-modal"
          className={`${w} relative top-0 bg-bg bg-cover shadow-md shadow-balack/80 rounded-md  
          ${animation} animated__animated`}
          onClick={handleStopPropagation}
        >
          <div id="header-modal">
            <div className="absolute top-2 right-2 w-[2.4rem] h-[2rem]">
              <Button
                icon={"bi bi-x-lg"}
                bgColor={"bg-custom-red"}
                responsive={true}
                onClick={handleClick}
              />
            </div>

            <div className="mt-12">
              <Title title={"AGREGAR DEUDOR"} color={"text-white"} />
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
