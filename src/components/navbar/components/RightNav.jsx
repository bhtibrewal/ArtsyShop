import { Link } from "react-router-dom";
import { useUserContext } from "../../../context";
export const RightNav = ({ onClick }) => {
  const loginState = useUserContext();
  return (
    <div className="right-side">
      <Link to="/mockman">Mockman</Link>

      {!loginState ? (
        <div onClick={onClick} className="user">
          <i className="fa-regular fa-user"></i>
        </div>
      ) : (
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
            <div className="flex-align-center">
              <span>Logout</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      )}

      <Link to="/wishlist" className="wishlist">
        <i className="fa-regular fa-heart"></i>
        <span className="items">25</span>
      </Link>

      <Link to="/cart" className="cart">
        <i className="fa-solid fa-bag-shopping"></i>
        <span className="items">25</span>
      </Link>
    </div>
  );
};
