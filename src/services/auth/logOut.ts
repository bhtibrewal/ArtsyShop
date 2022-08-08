export const logOut = ({
  setIsUserLoggedIn,
  userDataDispatch,
  productDispatch,
  showToast,
}: {
  setIsUserLoggedIn: Function;
  userDataDispatch: Function;
  productDispatch: Function;
  showToast: Function;
}) => {
  setIsUserLoggedIn(false);
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  productDispatch({ type: "RESET_CART_WISHLIST" });
  userDataDispatch({ type: "LOGOUT_USER" });
  showToast({ title: "logged out", type: "success" });
};
