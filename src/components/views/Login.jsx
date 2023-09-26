import React from "react";
import { useNavigate } from "react-router-dom";

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
    if (!user || !password) {
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
    <div className="min-w-[100vw] min-h-[100vh] flex justify-center items-center relative animate__animated animate__fadeIn animate__faster">
      <div
        className="w-[15rem] bg-white rounded-md shadow-lg shadow-black/50 overflow-hidden -mt-14 350px:mt-0 350px:w-[20rem] 700px:mt-0 "
        id="card-login"
      >
        <div className="pl-4 pr-4 pt-5">
          <div className="flex justify-start mb-8">
            <AppTitle color={"text-black"} colorOpacity={"opacity-70"} />
          </div>

          <div className="mb-10">
            <UserInput onKeyUp={handleKeyUp} />
          </div>

          <div className="mb-10">
            <PasswordInput onKeyUp={handleKeyUp} />
          </div>
        </div>

        <div className="bg-[#DCE0E8] bg-opacity-90 p-7 flex justify-center items-center">
          <div className="w-[50%]">
            <LoginBoton onClick={sendData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
