import React from "react";
import { Form } from "semantic-ui-react";

const Input = ({name, handleChange, label, type, required}) => {
  return (
    <Form.Input
      name={name}
      onChange={handleChange}
      required={required}
      label={label}
      type={type}
      focus
    />
  );
};

export default Input;
