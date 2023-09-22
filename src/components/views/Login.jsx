import React from "react";
import { useNavigate } from "react-router-dom";

import LoginCard from "./LoginCard";
import AppTitle from "../titles/AppTitle";

import UserInput from "../input/UserInput";
import PasswordInput from "../input/PasswordInput";

import LoginBoton from "../buttons/LoginBoton";

import { useContext } from "react";
import { store } from "../context/Context";

import emptyFields from "../alerts/emptyFields";
import invalidCredentials from "../alerts/invalidCredentials";

const LoginContent = () => {
  const navigate = useNavigate();

  const { user, password, validateCredentials, setActiveLoader } =
    useContext(store);

  const redirectDashboard = async () => {
    const validation = await validateCredentials();

    if (validation) {
      navigate("/dashboard");
    } else {
      invalidCredentials();
    }
  };

  const validateFields = async () => {
    if (!!user === false || !!password === false) {
      emptyFields();
    } else {
      setActiveLoader(true);
      redirectDashboard();
    }
  };
  const sendData = () => {
    validateFields();
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      sendData();
    }
  };

  return (
    <LoginCard>
      <div className="pl-4 pr-4 pt-8">
        <div className="flex justify-start mb-8">
          <AppTitle titleColor={"text-[black]"} />
        </div>

        <div className="mb-10">
          <UserInput onKeyUp={handleKeyUp} />
        </div>

        <div className="mb-10">
          <PasswordInput onKeyUp={handleKeyUp} />
        </div>
      </div>

      <div className="bg-[#DCE0E8] bg-opacity-90 p-6 flex justify-center items-center">
        <div className="w-[50%]">
          <LoginBoton onClick={sendData} />
        </div>
      </div>
    </LoginCard>
  );
};

export default LoginContent;
