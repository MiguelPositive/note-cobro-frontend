import React from "react";
import { useState } from "react";

import { createContext } from "react";

export const store = createContext();

const Context = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <store.Provider value={{ showPassword, setShowPassword }}>
      {children}
    </store.Provider>
  );
};

export default Context;
