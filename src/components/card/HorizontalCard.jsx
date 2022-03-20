import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext, useUserContext } from "../../context";
import { addToWishlist, removeFromWishlist } from "../../services";
import { inWhisList } from "../../utils/cart.utils";
import { RatingPalleteIcon } from "../rating/RatingPalleteIcon";

export const HorizontalCard = ({ product, children }) => {
  const {
    _id,
    title: item_name,
    artist: item_by,
    img: img_src,
    item_original_price,
    price: item_price,
    rating: item_rating,
    desc: item_desc,
  } = product;
  const navigate = useNavigate();
  const { loginState } = useUserContext();
  const {
    productState: { wishList },
    productDispatch,
  } = useProductContext();
  return (
    <div className="card w-40 hori">
      <button
        className="icon favourite-icon"
        onClick={() =>
          loginState
            ? inWhisList(wishList, product)
              ? removeFromWishlist({ _id, productDispatch })
              : addToWishlist({ product, productDispatch })
            : navigate("/sign-in")
        }
      >
        <i
          className={`${
            inWhisList(wishList, product) ? "fa-solid" : "fa-regular"
          } fa-heart fa-2x`}
        ></i>
      </button>
      <div className="content">
        <img
          className="card-img"
          src={img_src}
          alt={`${item_name} ${item_by}`}
        />
        <div className="card-header">
          <h1>{item_name}</h1>
          <h2>by {item_by}</h2>
          <div className="card-body">{item_desc}</div>
          <RatingPalleteIcon rating={item_rating} />
          <div className="price-sec">
            <h3>${item_price}</h3>
            <span className="strike-price">${item_original_price}</span>
          </div>
        </div>
      </div>

      <div className="card-actions">{children}</div>
    </div>
  );
};
