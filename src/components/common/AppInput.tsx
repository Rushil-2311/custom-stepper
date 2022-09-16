import React, { FunctionComponent } from "react";
import "./input.css";

interface appInputProps {
  value?: string | number;
  onChange?: (e: any) => void;
  type?: string;
  required?: boolean;
  errorText: string | null;
  placeholder: string;
}

const AppInput: FunctionComponent<appInputProps> = ({
  value,
  onChange,
  type,
  required,
  errorText,
  placeholder,
}) => {
  return (
    <React.Fragment>
      <input
        className="formInput"
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required ? required : false}
      />
      {errorText && <span>{errorText}</span>}
    </React.Fragment>
  );
};

export default AppInput;
