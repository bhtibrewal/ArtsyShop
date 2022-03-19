export const logOut = ({ setLoginState, userDataDispatch }) => {
    setLoginState(false);
    localStorage.clear("token");
    userDataDispatch({ type: "LOGOUT_USER" })
}