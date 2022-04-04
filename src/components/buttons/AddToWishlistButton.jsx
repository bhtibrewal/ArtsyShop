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
  const isAddedToWishlist = inWhisList(wishList, product);
  const handleAddToWishlist = () => {
    if (loginState)
      if (isAddedToWishlist)
        removeFromWishlist({ _id, productDispatch, showToast });
      else addToWishlist({ product, productDispatch, showToast });
    else navigate("/sign-in");
  };
  return (
    <button className="icon favourite-icon" onClick={handleAddToWishlist}>
      <i
        className={`${
          isAddedToWishlist ? "fa-solid" : "fa-regular"
        } fa-heart fa-2x`}
      ></i>
    </button>
  );
};
