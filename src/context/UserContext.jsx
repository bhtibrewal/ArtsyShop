import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const initialUserState = false;
  const [loginState, loginDispatch] = useState(initialUserState);

  return (
    <UserContext.Provider value={{ loginState, loginDispatch }}>
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
