import React from "react";
import { useState } from "react";
import { createContext } from "react";

import axios from "axios";

import debtorRegistered from "../alerts/debtorRegistered";

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

  const [debtors, setDebtors] = useState([]);
  const [debtorsCopy, setDebtorsCopy] = useState([]);

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

  const createDebtor = async (name, cedula, contact, email) => {
    await axios.post("https://note-cobro.onrender.com/create-debtor", {
      name,
      cedula,
      contact,
      email,
    });

    setTimeout(() => {
      setActiveLoader(null);
      setActiveModal(null);
      debtorRegistered();
      cleanData();
    }, 300);
    try {
    } catch (error) {
      console.log(
        `ocurrio un error en el frontend al intentar crear el deudor. ${error}`
      );
    }
  };

  const getDebtors = async () => {
    try {
      const res = await axios.get(
        "https://note-cobro.onrender.com/get-debtors"
      );

      setDebtors(res.data.debtors);
      setDebtorsCopy(res.data.debtors);
    } catch (error) {
      console.log(
        `ocurrio un error en el frontend al intentar consultar los deudores. ${error}`
      );
    }
  };

  const cleanData = () => {
    setName(null);
    setCedula(null);
    setContact(null);
    setEmail(null);
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
        setProductUnits,
        createDebtor,
        cleanData,
        getDebtors,
        debtors,
        debtorsCopy,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Context;
