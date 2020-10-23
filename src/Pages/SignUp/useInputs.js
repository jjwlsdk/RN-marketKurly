import React, { useCallback, useReducer } from "react";

export const initialState = {
  inputs: {
    account: "",
    password: "",
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    gender: "남자",
    birth: "",
  },
  idGuide: {
    focus: false,
    isValidate: false,
    isDuplicate: false,
  },
  pwGuide: {
    focus: false,
    isLong: false,
    isValidate: false,
  },
  confirmPwGuide: {
    focus: false,
    isEqual: false,
  },
};

const reducer = (state, action) => {
  const guideName = action.name + "Guide";

  switch (action.type) {
    case "CHANGE_INPUT":
      console.log(state);
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "FOCUS_USER":
      return {
        ...state,
        [guideName]: { ...state[guideName], focus: true },
      };
    case "CHANGE_GUIDE":
      return {
        ...state,
        [guideName]: {
          ...state[guideName],
          [action.target]: action.value,
        },
      };
    default:
      return state;
  }
};

export default function useInputs() {
  const [form, dispatch] = useReducer(reducer, initialState);

  const onChange = useCallback((value, name) => {
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  const onFocus = useCallback((name) => {
    dispatch({
      type: "FOCUS_USER",
      name,
    });
  }, []);

  const onChangeGuide = useCallback((name, target, value) => {
    dispatch({
      type: "CHANGE_GUIDE",
      name,
      target,
      value,
    });
  }, []);

  return [form, onChange, onFocus, onChangeGuide];
}
