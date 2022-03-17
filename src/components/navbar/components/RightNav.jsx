import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context";
import { LoggedInUser } from "./LoggedInUser";

export const RightNav = ({ onClick }) => {
  const loginState = useUserContext();
  const navigate = useNavigate();
  return (
    <div className="right-side">
      <Link to="/mockman">Mockman</Link>

      {!loginState ? (
        <div onClick={() => navigate("/sign-in")} className="user">
          <i className="fa-regular fa-user fa-xl"></i>
        </div>
      ) : (
        <LoggedInUser />
      )}

      <Link to="/wishlist" className="wishlist">
        <i className="fa-regular fa-heart fa-xl"></i>
        <span className="items">25</span>
      </Link>

      <Link to="/cart" className="cart">
        <i className="fa-solid fa-bag-shopping fa-xl"></i>
        <span className="items">25</span>
      </Link>
    </div>
  );
};
