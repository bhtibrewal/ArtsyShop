import { useReducer, useState } from "react";

export const useUserData = () => {
  const initialLoginState =
    localStorage.getItem("token") !== null ? true : false;
  const [loginState, setLoginState] = useState(initialLoginState);
  const address = { street: "", city: "", country: "", zip_code: "" };
  const localUserData = JSON.parse(localStorage.getItem("user"));
  const initialUserData = localUserData
    ? { ...localUserData, address }
    : {
        firstName: "",
        lastName: "",
        email: "",
        createdAt: "",
        address,
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
      case "ADD_ADDRESS":
        console.log(payload);
        return { ...state, address: { ...payload } };
      default:
        return { ...state };
    }
  };

  const [userData, userDataDispatch] = useReducer(
    user_data_reducer,
    initialUserData
  );
  console.log(userData);
  return { loginState, setLoginState, userData, userDataDispatch };
};
