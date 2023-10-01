import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import AppTitle from "../titles/Title";

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

  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();

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
    setTime1(performance.now());
    validateFields();

    setTime2(performance.now());
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      sendData();
    }
  };

  useEffect(() => {
    console.log(time2 - time1);
  }, [time2]);

  return (
    <div className="min-w-[100vw] min-h-[100vh] flex justify-center items-center relative animate__animated animate__fadeIn animate__faster">
      <div
        className="w-[15rem] bg-white rounded-md shadow-lg shadow-black/50 overflow-hidden -mt-14 350px:mt-0 350px:w-[20rem] 700px:mt-0 "
        id="card-login"
      >
        <div className="pl-4 pr-4 pt-5">
          <div className="flex justify-start mb-8">
            <AppTitle
              title={"NO TE COBRO"}
              color={"text-black"}
              colorOpacity={"opacity-70"}
            />
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
