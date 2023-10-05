import React from "react";
import { useState } from "react";
import { createContext } from "react";

import axios from "axios";

export const store = createContext();

const Context = ({ children }) => {
  const [activeLoader, setActiveLoader] = useState(null);

  const [activeModal, setActiveModal] = useState(null);

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  const [name, setName] = useState(null);
  const [cedula, setCedula] = useState(null);
  const [contact, setContact] = useState(null);
  const [email, setEmail] = useState(null);

  const [nameProduct, setNameProduct] = useState(null);
  const [productValue, setProductValue] = useState(null);
  const [productUnits, setProductUnits] = useState(null);

  const validateCredentials = async () => {
    try {
      const res = await axios.post(
        "https://note-cobro.onrender.com/validate-credentials",
        { user, password }
      );

      setActiveLoader(false);
      return res.data.validation;
    } catch (error) {
      console.log(
        `ocurrio un error al validar las credenciales en el frontend  ${error}`
      );
    }
  };

  return (
    <store.Provider
      value={{
        user,
        setUser,
        password,
        setPassword,
        validateCredentials,
        activeLoader,
        setActiveLoader,
        activeModal,
        setActiveModal,
        name,
        setName,
        cedula,
        setCedula,
        contact,
        setContact,
        email,
        setEmail,
        nameProduct,
        setNameProduct,
        productValue,
        setProductValue,
        productUnits,
        setProductUnits
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Context;
