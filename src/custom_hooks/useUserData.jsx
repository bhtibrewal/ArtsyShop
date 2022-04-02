import axios from "axios";
import { useReducer, useState } from "react";

export const useUserData = () => {
  const encodedToken = localStorage.getItem("token");
  const initialLoginState = encodedToken !== null ? true : false;
  axios.defaults.headers.common["authorization"] = encodedToken;
  const [loginState, setLoginState] = useState(initialLoginState);
  const localUserData = JSON.parse(localStorage.getItem("user"));
  const initialUserData = localUserData
    ? { ...localUserData }
    : {
        firstName: "",
        lastName: "",
        email: "",
        createdAt: "",
      };

  const user_data_reducer = (state, { type, payload }) => {
    switch (type) {
      case "LOGIN_USER":
        return {
          ...state,
          ...payload,
        };
      case "LOGOUT_USER":
        return { ...initialUserData };
      default:
        return { ...state };
    }
  };

  const [userData, userDataDispatch] = useReducer(
    user_data_reducer,
    initialUserData
  );
  return { loginState, setLoginState, userData, userDataDispatch };
};
