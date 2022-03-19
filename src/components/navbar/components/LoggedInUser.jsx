import { useUserContext } from "../../../context";
import { logOut } from "../../../services";

export const LoggedInUser = () => {
  const { setLoginState, userDataDispatch } = useUserContext();

  return (
    <div className="user">
      <div className="avatar-text avatar-s">BT</div>
      <div className="user-dropdown flex-col">
        <a
          className="flex-align-center"
          href="/pages/user-profile/user-profile.html"
        >
          <span>My Account</span>
          <i className="fa-solid fa-angle-right"></i>
        </a>
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
