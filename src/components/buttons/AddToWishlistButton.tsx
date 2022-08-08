import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext, useToast, useUserContext } from "../../context";
import { addToWishlist, removeFromWishlist } from "../../services";
import { Product } from "../../types";
import { inWhisList } from "../../utils/cart.utils";


export const AddToWishlistButton = ({ product } : { product: Product }) => {
  const { _id } = product;
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { isUserLoggedIn } = useUserContext();
  const {
    productState: { wishList },
    productDispatch,
  } = useProductContext();
  const isAddedToWishlist = inWhisList(wishList, product);
  const handleAddToWishlist = () => {
    if (isUserLoggedIn)
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
