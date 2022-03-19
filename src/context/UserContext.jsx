import { createContext, useContext, useReducer, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const initialLoginState =
    localStorage.getItem("token") !== null ? true : false;
  const [loginState, setLoginState] = useState(initialLoginState);
  const initialUserData = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  };
  const user_data_reducer = (state, { type, payload }) => {
    switch (type) {
      case "LOGIN_USER":
        return {
          ...state,
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
        };
        case "LOGOUT_USER": return {...initialUserData};
        default : return;
    }
  };
  const [userData, userDataDispatch] = useReducer(
    user_data_reducer,
    initialUserData
  );
  return (
    <UserContext.Provider
      value={{ loginState, setLoginState, userData, userDataDispatch }}
    >
      {children}
    </UserContext.Provider>
  );
};
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      `use useUserContext must be used inside a context provider`
    );
  }
  return context;
};
export { UserContextProvider, useUserContext };
