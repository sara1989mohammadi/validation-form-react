import React, { useState } from "react";
const SimpleInput = (props) => {
  const [enterdName, setEnterdName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnterdName(event.target.value);
    if (enterdName.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBluerHandler = (event) => {
    setEnteredNameIsTouched(true);
    if (enterdName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    if (enterdName.trim() !== "") {
      setEnteredNameIsValid(true);
    }
    setEnteredNameIsValid(true);
  };

  const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;
  const nameInputClasses = nameInputIsInValid
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
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
