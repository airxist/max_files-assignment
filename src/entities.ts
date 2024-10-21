import React from "react";

export interface LogoProps {
  styling?: string;
  textStyle?: string;
  mainText?: string;
  spanText?: string;
}

export interface BtnProps {
  icon?: React.ReactNode;
  text?: string;
  styling: string;
  position?: string;
}

export interface IconProps {
  width: number;
  height: number;
}

export interface FormInputProps {
  type?: string;
  styling?: string;
  name?: string;
  label?: string;
  labelStyle?: string;
  placeholder?: string;
  inputStyle?: string;
}
