import React from "react";
import { useContext } from "react";
import { store } from "../context/Context";

import Modal from "./Modal";
import Date from "../date/Date";
import Time from "../date/Time";
import MaxAmountInput from "../input/MaxAmountInput";
import SendButton from "../buttons/SendButton";

const ManageAlertsModal = () => {
  const { alertsModal, createAlert } = useContext(store);

  const sendData = () => {
    createAlert();
  };

  return (
    <Modal
      w={"w-[18rem] 450px:w-[20rem]"}
      active={alertsModal}
      title={"Gestión de alertas"}
    >
      <div className="pl-3 pr-3 flex flex-col gap-5 ">
        <div>
          <Date />
        </div>

        <div>
          <Time />
        </div>

        <div>
          <MaxAmountInput />
        </div>
      </div>

      <div id="button-send" className="flex justify-center mt-5 mb-5">
        <div className="w-[2.8rem]">
          <SendButton onClick={sendData} />
        </div>
      </div>
    </Modal>
  );
};

export default ManageAlertsModal;
