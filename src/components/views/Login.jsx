import React from "react";

import LoginCard from "./LoginCard";
import AppTitle from "../titles/AppTitle";

import UserInput from "../input/UserInput";
import PasswordInput from "../input/PasswordInput";

import LoginBoton from "../buttons/LoginBoton";

const LoginContent = () => {
  return (
    <LoginCard>
      <div className="pl-4 pr-4 pt-8">
        <div className="flex justify-start mb-8">
          <AppTitle titleColor={"text-[black]"} />
        </div>

        <div className="mb-8">
          <UserInput />
        </div>

        <div className="mb-8">
          <PasswordInput />
        </div>
      </div>

      <div className="bg-[#DCE0E8] bg-opacity-90 p-6 flex justify-center items-center">
        <div className="w-[50%]">
          <LoginBoton />
        </div>
      </div>
    </LoginCard>
  );
};

export default LoginContent;
