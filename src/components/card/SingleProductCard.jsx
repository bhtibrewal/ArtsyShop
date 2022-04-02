import { useNavigate } from "react-router-dom";
import { useProductContext, useToast, useUserContext } from "../../context";
import { addToCart, addToWishlist, removeFromWishlist } from "../../services";
import { inCart, inWhisList } from "../../utils/cart.utils";
import { AddToWishlistButton } from "../buttons/AddToWishlistButton";
import { ButtonPrimary } from "../buttons/ButtonPrimary";
import { OutlineButtonPrimary } from "../buttons/OutlineButtonPrimary";
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
  const { showToast } = useToast();
  const {
    productState: { wishList, cart },
    productDispatch,
  } = useProductContext();

  return (
    <div className="card single-product_card">
      <AddToWishlistButton product={product} />
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
          <Rating rating={rating} />| {rated_by} reviews
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
                  ? addToCart({ product, productDispatch, showToast })
                  : navigate("/cart")
                : navigate("/sign-in");
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span>
              {!inCart(cart, product) ? "Acquire This Artwork" : "Go To Cart"}
            </span>
          </OutlineButtonPrimary>
        </div>
      </div>
    </div>
  );
};
