export const logOut = ({ pathname, navigate, setLoginState, userDataDispatch, productDispatch }) => {
    setLoginState(false);
    localStorage.clear("token");
    localStorage.clear("user");
    productDispatch({ type: "RESET_CART_WISHLIST" });
    userDataDispatch({ type: "LOGOUT_USER" });
}