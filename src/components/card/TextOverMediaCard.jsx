import { useNavigate } from "react-router-dom";
import { useProductContext, useUserContext } from "../../context";
import { addToWishlist } from "../../services/wishlist/addToWishlist";
import { removeFromWishlist } from "../../services/wishlist/removeFromWishlist";
import { inWhisList } from "../../utils/cart.utils";
import { Rating } from "../index";

export const TextOverMediaCard = ({ item: product }) => {
  const {
    _id,
    id,
    title: item_name,
    artist: item_by,
    img: img_src,
    item_original_price,
    price: item_price,
    rating: item_rating,
  } = product;
  const navigate = useNavigate();
  const { loginState } = useUserContext();
  const {
    productState: { wishList },
    productDispatch,
  } = useProductContext();
  return (
    <div className="card w-30 text-o-media">
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
            inWhisList(wishList, product) ? "fa-solid wishlisted" : "fa-regular"
          } fa-heart fa-2x`}
        ></i>
      </button>
      <div className="content" onClick={() => navigate(`/products/${id}`)}>
        <img
          className="card-img"
          src={img_src}
          alt={`${item_name} ${item_by}`}
        />
        <div className="card-header">
          <h1>{item_name}</h1>
          <h2>by {item_by}</h2>
          <Rating rating={item_rating} />
          <div className="price-sec">
            <span className="body-l">Rs.{item_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
