export const logOut = ({ pathname, navigate, setLoginState, userDataDispatch, productDispatch }) => {
    const privateRoutes = ['/cart', '/wishlist', '/checkout'];
    privateRoutes.some(route => route === pathname && navigate("/"));
    setLoginState(false);
    localStorage.clear("token");
    localStorage.clear("user");
    productDispatch({ type: "RESET_CART_WISHLIST" });
    userDataDispatch({ type: "LOGOUT_USER" });
}