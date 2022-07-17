import React, { useState } from "react";
const SimpleInput = (props) => {
  const [enterdName, setEnterdName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnterdName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enterdName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };
  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={submitHandler} className={nameInputClasses}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enterdName}
        />
        {!enteredNameIsValid && <p className="error-text">Test</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
