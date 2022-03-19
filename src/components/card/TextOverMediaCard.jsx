import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context";
import { addToWishlist } from "../../services/wishlist/addToWishlist";
import { removeFromWishlist } from "../../services/wishlist/removeFromWishlist";
import { RatingPalleteIcon } from "../index";

export function inWhisList(wishList, product) {
  return wishList.some((item) => item._id === product._id);
}

export const TextOverMediaCard = ({ item: product }) => {
  const {
    _id,
    title: item_name,
    artist: item_by,
    img: img_src,
    item_original_price,
    price: item_price,
    rating: item_rating,
  } = product;
  const navigate = useNavigate();
  const { productState, productDispatch } = useProductContext();
  const { wishList } = productState;
  console.log(inWhisList(wishList, product));
  return (
    <div className="card w-30 text-o-media">
      <button
        className="icon favourite-icon"
        onClick={() =>
          inWhisList(wishList, product)
            ? removeFromWishlist({ _id, productDispatch })
            : addToWishlist({ product, productDispatch })
        }
      >
        <i
          className={`${
            inWhisList(wishList, product)
              ? "fa-solid wishlisted"
              : "fa-regular"
          } fa-heart fa-2x`}
        ></i>
      </button>
      <div className="content" onClick={() => navigate(`${_id}`)}>
        <img className="card-img" src={img_src} alt="" />
        <div className="card-header">
          <h1>{item_name}</h1>
          <h2>by {item_by}</h2>
          <RatingPalleteIcon rating={item_rating} />
          <div className="price-sec">
            <h4>${item_price}</h4>
            <span className="strike-price">${item_original_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
