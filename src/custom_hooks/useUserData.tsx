import axios from "axios";
import { useReducer, useState } from "react";
import { UserDetailsType } from "../types";

export const useUserData = () => {
  const encodedToken = localStorage.getItem("token");
  const initialisUserLoggedIn = encodedToken !== null ? true : false;
  axios.defaults.headers.common["authorization"] = encodedToken;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(initialisUserLoggedIn);
  const localUserData = JSON.parse(localStorage.getItem("user") as string);
  const initialUserData = localUserData
    ? { ...localUserData }
    : {
        firstName: "",
        lastName: "",
        email: "",
        createdAt: "",
        addresses: [],
      };

  const userDataReducer = (
    state: UserDetailsType,
    { type, payload }: { type: string; payload: any }
  ) => {
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
  return { isUserLoggedIn, setIsUserLoggedIn, userData, userDataDispatch };
};
