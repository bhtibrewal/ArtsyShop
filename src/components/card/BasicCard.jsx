import { useNavigate } from "react-router-dom";
import { useProductContext, useUserContext } from "../../context";
import { addToCart, removeFromWishlist } from "../../services";
import { inCart } from "../../utils/cart.utils";
import { ButtonPrimary } from "../buttons";
import { RatingPalleteIcon } from "../index";

export const BasicCard = ({ product }) => {
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
  const { loginState } = useUserContext();
  const navigate = useNavigate();
  const {
    productState: { cart },
    productDispatch,
  } = useProductContext();

  return (
    <div className="card w-30 basic">
      <button
        className="icon favourite-icon"
        onClick={() => removeFromWishlist({ _id, productDispatch })}
      >
        <i className="fa-solid fa-heart fa-2x"></i>
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
      <div className="card-actions">
        <ButtonPrimary
          onClick={() => {
            loginState
              ? !inCart(cart, product)
                ? addToCart({ product, productDispatch })
                : navigate("/cart")
              : navigate("/sign-in");
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{!inCart(cart, product) ? "Add to Cart" : "Go To Cart"}</span>
        </ButtonPrimary>
      </div>
    </div>
  );
};
