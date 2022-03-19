import { NavLink, useNavigate } from "react-router-dom";
import { useProductContext, useUserContext } from "../../../context";
import { LoggedInUser } from "./LoggedInUser";

export const RightNav = ({ onClick }) => {
  const { loginState } = useUserContext();
  const navigate = useNavigate();
  const { productState, productDispatch } = useProductContext();
  const { wishList, cart } = productState;
  console.log({ loginState });
  return (
    <div className="right-side">
      <NavLink to="/mockman">Mockman</NavLink>

      {loginState ? (
        <LoggedInUser />
      ) : (
        <div onClick={() => navigate("/sign-in")} className="user">
          <i className="fa-regular fa-user fa-xl"></i>
        </div>
      )}
      <div
        className="wishlist"
        onClick={() =>
          loginState ? navigate("/wishlist") : navigate("/sign-in")
        }
      >
        <i className="fa-regular fa-heart fa-xl"></i>
        <span className="items">{wishList.length}</span>
      </div>

      <div
        className="cart"
        onClick={() => (loginState ? navigate("/cart") : navigate("/sign-in"))}
      >
        <i className="fa-solid fa-bag-shopping fa-xl"></i>
        <span className="items">{cart.length}</span>
      </div>
    </div>
  );
};
