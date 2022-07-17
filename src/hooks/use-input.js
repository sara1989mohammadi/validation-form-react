import React, { useState } from "react";

const UseInput = (validateValue) => {
  const [enterdValue, setEnterdValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enterdValue);
  const hasError = !valueIsValid && isTouched;

  const valueInputChangeHandler = (event) => {
    setEnterdValue(event.target.value);
  };

  const valueInputBluerHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnterdValue("");
    setIsTouched(false);
  };

  return {
    value: enterdValue,
    isValid: valueIsValid,
    hasError,
    valueInputChangeHandler,
    valueInputBluerHandler,
    reset,
  };
};
export default UseInput;
