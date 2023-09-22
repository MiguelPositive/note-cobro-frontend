import React from "react";
import { useState } from "react";
import { createContext } from "react";

import axios from "axios";

export const store = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  const validateCredentials = async () => {
    try {
      const res = await axios.post(
        "https://note-cobro.onrender.com/validate-credentials",
        { user, password }
      );

      return res;
    } catch (error) {
      console.log(
        `ocurrio un error al validar las credenciales en el frontend  ${error}`
      );
    }
  };

  return (
    <store.Provider
      value={{ user, setUser, password, setPassword, validateCredentials }}
    >
      {children}
    </store.Provider>
  );
};

export default Context;
