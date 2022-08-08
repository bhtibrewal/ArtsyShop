import { useNavigate } from "react-router-dom";
import { AddToWishlistButton } from "../buttons/AddToWishlistButton";
import { Rating } from "../index";

export const ProductListingCard = ({ item: product }: {item: import("../../types").Product}) => {
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
  
  return (
    <div className="card w-30 text-o-media">
      <AddToWishlistButton product={product} />
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
