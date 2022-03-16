import { Link } from "react-router-dom";
import { useUserContext } from "../../../context";
import { LoggedInUser } from "./LoggedInUser";

export const RightNav = ({ onClick }) => {
  const loginState = useUserContext();

  return (
    <div className="right-side">
      <Link to="/mockman">Mockman</Link>

      {loginState ? (
        <div onClick={onClick} className="user">
          <i className="fa-regular fa-user"></i>
        </div>
      ) : (
        <LoggedInUser />
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
