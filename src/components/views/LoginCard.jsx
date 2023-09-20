import React from "react";

const LoginCard = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center items-center relative animate__animated animate__fadeIn animate__slow">
      <div
        className="w-[15rem] bg-white rounded-md shadow-lg shadow-black/50 overflow-hidden -mt-14 350px:w-[20rem] 700px:mt-0 "
        id="card-login"
      >
        {children}
      </div>
    </div>
  );
};

export default LoginCard;
