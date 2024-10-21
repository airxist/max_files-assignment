import React from "react";
import { BtnProps } from "../../entities";

const Btn = ({ icon, text, styling, position = 'left' }: BtnProps) => {
  return (
    <button className={styling}>
      {position === "left" && icon}
      {text}
      {position === "right" && icon}
    </button>
  );
};

export default Btn;
