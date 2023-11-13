import React from "react";


import Title from "../titles/Title";
import HomeButton from "../buttons/HomeButton";
import SignOffButton from "../buttons/SignOffButton";

const HeaderDebtorMenu = ({onClick}) => {

  return (
    <div
      className="mt-5 mb-5 flex justify-between 900px:justify-center"
      id="header"
    >
      <div className="900px:ml-auto">
        <Title title={"Menu del deudor"} />
      </div>

      <div
        id="buttons-header"
        className="relative flex justify-center gap-2 900px:static 900px:justify-around 900px:ml-auto"
      >
        <div className="450px:absolute 450px:top-0 450px:right-14 900px:static">
          <HomeButton onClick={onClick} />
        </div>

        <div className="450px:absolute 450px:top-0 450px:right-0 900px:static">
          <SignOffButton />
        </div>
      </div>
    </div>
  );
};

export default HeaderDebtorMenu;
