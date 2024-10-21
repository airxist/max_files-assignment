import React from "react";
import { FormInputProps } from "../../entities";

const FormInput = ({
  type = "text",
  styling,
  name,
  label,
  labelStyle,
  placeholder,
  inputStyle,
}: FormInputProps) => {
  return (
    <div className={styling}>
      {label && (
        <label htmlFor={name} className={labelStyle}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={inputStyle}
      />
    </div>
  );
};

export default FormInput;
