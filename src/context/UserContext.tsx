import { createContext, useContext } from "react";
import { useUserData } from "../custom_hooks/useUserData";
import { UserDetailsType } from "../types";
type UserContextType = {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: Function;
  userData: UserDetailsType;
  userDataDispatch: Function;
};

const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider = ({ children }: { children?: JSX.Element }) => {
  const userObj = useUserData();
  return (
    <UserContext.Provider value={{ ...userObj }}>
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
