import { useNavigate } from "react-router-dom";
import { useProductContext, useToast, useUserContext } from "../../context";
import { addToWishlist, removeFromWishlist } from "../../services";
import { inWhisList } from "../../utils/cart.utils";

export const AddToWishlistButton = ({ product }) => {
  const { _id } = product;
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { loginState } = useUserContext();
  const {
    productState: { wishList },
    productDispatch,
  } = useProductContext();
  return (
    <button
      className="icon favourite-icon"
      onClick={() =>
        loginState
          ? inWhisList(wishList, product)
            ? removeFromWishlist({ _id, productDispatch, showToast })
            : addToWishlist({ product, productDispatch, showToast })
          : navigate("/sign-in")
      }
    >
      <i
        className={`${
          inWhisList(wishList, product) ? "fa-solid" : "fa-regular"
        } fa-heart fa-2x`}
      ></i>
    </button>
  );
};
