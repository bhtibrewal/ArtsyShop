import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProductContext, useToast, useUserContext } from "../../../context";
import { logOut } from "../../../services";

export const LoggedInUser = () => {
  const { setIsUserLoggedIn, userData, userDataDispatch } = useUserContext();
  const { productDispatch } = useProductContext();
  const { showToast } = useToast();
  return (
    <div className="user">
      <div className="avatar-text avatar-s">{`${userData.firstName[0].toUpperCase()}${userData.lastName[0].toUpperCase()}`}</div>
      <div className="user-dropdown flex-col">
        <Link to="/user-profile" className="flex-align-center">
          <span>My Account</span>
          <i className="fa-solid fa-angle-right"></i>
        </Link>
        <div className="flex-align-center">
          <span>My offers</span>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div
          className="flex-align-center"
          onClick={() =>
            logOut({
              setIsUserLoggedIn,
              userDataDispatch,
              productDispatch,
              showToast,
            })
          }
        >
          <span>Logout</span>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};
