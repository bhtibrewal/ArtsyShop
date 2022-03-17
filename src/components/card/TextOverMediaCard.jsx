import { useProductContext } from "../../context";
import { RatingPalleteIcon } from "../index";
export function inWhisList(wishList, art) {
  if (wishList.length === 0) return false;
  return wishList.some((item) => item._id === art._id);
}

export function inCart(cart, art) {
  if (cart.length === 0) return false;
  return cart.some((item) => item._id === art._id);
}

export const TextOverMediaCard = ({ item: art }) => {
  const {
    title: item_name,
    artist: item_by,
    img: img_src,
    item_original_price,
    price: item_price,
    rating: item_rating,
  } = art;

  const { productState } = useProductContext();
  const { wishList, cart } = productState;
  console.log(wishList);
  return (
    <div className="card w-30 text-o-media">
      <div className="content">
        <img className="card-img" src={img_src} alt="" />
        <button className="icon favourite-icon">
          <i
            className={`${() =>
              inWhisList(wishList, art) ? "fas" : "fa-regular"} fa-heart fa-2x`}
          ></i>
        </button>

        <div className="card-header">
          <h1>{item_name}</h1>
          <h2>by {item_by}</h2>
          <RatingPalleteIcon rating={item_rating} />
          <div className="price-sec">
            <h3>${item_price}</h3>
            <span className="strike-price">${item_original_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
