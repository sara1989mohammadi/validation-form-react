import { useReducer } from "react";

const initialInputValue = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if ((action.type = "INPUT")) {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if ((action.type = "BLUER")) {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if ((action.type = "RESET")) {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialInputValue;
};
const UseInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputValue
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueInputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const valueInputBluerHandler = (event) => {
    dispatch({ type: "BLUER" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueInputChangeHandler,
    valueInputBluerHandler,
    reset,
  };
};
export default UseInput;
