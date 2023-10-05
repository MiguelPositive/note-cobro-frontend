import React from "react";

import { useContext } from "react";
import { store } from "../context/Context";

import Input from "./Input";

const ContactInput = () => {
  const { contact, setContact } = useContext(store);

  const handleChange = (e) => {
    setContact(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <Input
      value={contact}
      placeholder={"No. WhatsApp"}
      icon={"bi bi-whatsapp"}
      type={"number"}
      cursor={"cursor-default"}
      colorWarnig={"text-white"}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default ContactInput;
