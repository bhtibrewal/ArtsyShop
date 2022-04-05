import axios from "axios";
import { useReducer, useState } from "react";

export const useUserData = () => {
  const encodedToken = localStorage.getItem("token");
  const initialLoginState = encodedToken !== null ? true : false;
  axios.defaults.headers.common["authorization"] = encodedToken;
  const [loginState, setLoginState] = useState(initialLoginState);
  const localUserData = JSON.parse(localStorage.getItem("user"));
  const initialUserData = localUserData
    ? { ...localUserData, addresses: [] }
    : {
        firstName: "",
        lastName: "",
        email: "",
        createdAt: "",
        addresses: [],
      };

  const userDataReducer = (state, { type, payload }) => {
    switch (type) {
      case "LOGIN_USER":
        return {
          ...state,
          ...payload,
        };
      case "LOGOUT_USER":
        return { ...initialUserData };
      case "HANDLE_ADDRESSES":
        return { ...state, addresses: payload };
      default:
        return { ...state };
    }
  };

  const [userData, userDataDispatch] = useReducer(
    userDataReducer,
    initialUserData
  );
  console.log(userData);
  return { loginState, setLoginState, userData, userDataDispatch };
};
