import React from "react";
import Switch from "./common/Switch";

const HeaderSwitch = () => {
  return (
    <div className="flex-center font-bold text-xs md:text-sm">
      <p>user</p>
      <Switch />
      <p>admin</p>
    </div>
  );
};

export default HeaderSwitch;
