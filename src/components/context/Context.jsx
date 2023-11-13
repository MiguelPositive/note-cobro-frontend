import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

import axios from "axios";

import debtorRegistered from "../alerts/debtorRegistered";
import debtAdded from "../alerts/debtAdded";

export const store = createContext();

const Context = ({ children }) => {
  const [activeLoader, setActiveLoader] = useState(null);

  const [activeModal, setActiveModal] = useState(null);

  const [hiddenAddCredit, setHiddenAddCredit] = useState(null);

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  const [name, setName] = useState(null);
  const [cedula, setCedula] = useState(null);
  const [contact, setContact] = useState(null);
  const [email, setEmail] = useState(null);

  const [debtors, setDebtors] = useState([]);
  const [debtorsCopy, setDebtorsCopy] = useState([]);

  const [debtorTemp, setDebtorTemp] = useState("");

  const [creditDate, setCreditDate] = useState(null);
  const [productName, setProductName] = useState(null);
  const [unitPrice, setUnitPrice] = useState(null);
  const [productsQuantity, setProductsQuantity] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const [products, setProducts] = useState([]);

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

    getDebtors();

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

  const addProducts = () => {
    setProducts([...products, { productName, unitPrice, productsQuantity }]);

    setProductName(null);
    setUnitPrice(null);
    setProductsQuantity(null);
    setTotalPrice(totalPrice + productName * productsQuantity);
  };

  const addDebt = async () => {
    try {
      let currentDate = new Date();

      await axios.post("http://localhost:4000/add-debt", {
        _id: debtorTemp._id,
        debt: debtorTemp.debt,
        products,
        creditDate: currentDate.toLocaleDateString(),
        totalPrice: totalPrice + debtorTemp.totalPrice,
      });

      debtAdded();
      setActiveModal(null);
    } catch (error) {
      console.log(
        `ocurrio un error en el front al intentar agregar la deuda al cliente. ${error}`
      );
    }
  };

  const cleanData = () => {
    setName(null);
    setCedula(null);
    setContact(null);
    setEmail(null);

    setCreditDate(null);
    setProductName(null);
    setUnitPrice(null);
    setProductsQuantity(null);
    setProducts([]);
    setTotalPrice(null);
  };

  // useEffect(() => {
  //   console.log(totalPrice);
  // }, [totalPrice]);

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
        createDebtor,
        cleanData,
        getDebtors,
        debtors,
        debtorsCopy,
        setDebtorsCopy,
        debtorTemp,
        setDebtorTemp,
        creditDate,
        setCreditDate,
        productName,
        setProductName,
        unitPrice,
        setUnitPrice,
        productsQuantity,
        setProductsQuantity,
        totalPrice,
        setTotalPrice,
        addProducts,
        products,
        setProducts,
        addDebt,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Context;
