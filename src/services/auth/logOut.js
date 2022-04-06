export const logOut = ({ setLoginState, userDataDispatch, productDispatch, showToast }) => {
    setLoginState(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    productDispatch({ type: "RESET_CART_WISHLIST" });
    userDataDispatch({ type: "LOGOUT_USER" });
    showToast({ title: 'logged out', type: 'success' });
}