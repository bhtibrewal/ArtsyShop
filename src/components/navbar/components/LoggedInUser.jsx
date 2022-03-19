import { Link } from "react-router-dom";
import { useUserContext } from "../../../context";
import { logOut } from "../../../services";

export const LoggedInUser = () => {
  const { setLoginState, userDataDispatch } = useUserContext();

  return (
    <div className="user">
      <div className="avatar-text avatar-s">BT</div>
      <div className="user-dropdown flex-col">
        <Link to="me"
          className="flex-align-center"
        >
          <span>My Account</span>
          <i className="fa-solid fa-angle-right"></i>
        </Link>
        <div className="flex-align-center">
          <span>My offers</span>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div
          className="flex-align-center"
          onClick={() => logOut({ setLoginState, userDataDispatch })}
        >
          <span>Logout</span>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};
