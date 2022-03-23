import { useNavigate } from "react-router-dom";
import { useProductContext, useUserContext } from "../../context";
import { addToCart, addToWishlist, removeFromWishlist } from "../../services";
import { inCart, inWhisList } from "../../utils/cart.utils";
import { ButtonPrimary, OutlineButtonPrimary } from "../buttons";
import { Rating } from "../rating/Rating";

export const SingleProductCard = ({ product }) => {
  const {
    _id,
    title,
    artist,
    img: img_src,
    original_price,
    price,
    rating,
    rated_by,
    desc: item_desc,
    categoryName,
    inStock,
    fastDelivery,
  } = product;
  const navigate = useNavigate();
  const { loginState } = useUserContext();
  const {
    productState: { wishList, cart },
    productDispatch,
  } = useProductContext();

  return (
    <div className="card single-product_card">
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
      <img className="card-img" src={img_src} alt={`${title} ${artist}`} />

      <div className="content">
        <h1>{title}</h1>
        <h3>by {artist}</h3>
        <p className="body-l">{item_desc}</p>
        <p> Category: {categoryName}</p>
        <div className="flex-align-center item-features">
          {fastDelivery && (
            <div className="flex-col">
              <i className="fa-solid fa-truck-fast"></i>
              <p>Fast Delivery</p>
            </div>
          )}
          <div className="flex-col">
            <i className="fa-solid fa-hand-holding-heart"></i>
            <p> Original Work</p>
          </div>
          <div className="flex-col">
          <i className="fa-solid fa-box-open"></i>
            <p>Free 14 days return</p>
          </div>
        </div>

        <span className="flex-align-center">
          <Rating rating={rating} />
          | {rated_by} reviews
        </span>
        <div className="price-sec">
          <span className="body-l">Rs{price}</span>
          <span className="strike-price">Rs.{original_price}</span>
        </div>
        <div className="card-actions">
          <ButtonPrimary>Buy Now</ButtonPrimary>
          <OutlineButtonPrimary
            onClick={() => {
              loginState
                ? !inCart(cart, product)
                  ? addToCart({ product, productDispatch })
                  : navigate("/cart")
                : navigate("/sign-in");
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{!inCart(cart, product) ? "Acquire This Artwork" : "Go To Cart"}</span>
          </OutlineButtonPrimary>
        </div>
      </div>
    </div>
  );
};
