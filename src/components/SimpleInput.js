import React, { useState } from "react";
import UseInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enterdName,
    isValid: enteredNameIsValid,
    hasError: nampeInputHasError,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBluerHandler: nameInputBluerHandler,
    reset: reset,
  } = UseInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    reset("");
  };

  const nameInputClasses = nampeInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submitHandler} className={nameInputClasses}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBluerHandler}
          value={enterdName}
        />
        {nampeInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
