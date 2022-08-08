import { AddToWishlistButton } from "../buttons/AddToWishlistButton";
import { Rating } from "../rating/Rating";
import { QuantitySection } from "./components/QuantitySection";

type BasicCardProps = {
  product: import("../../types").Product;
  children: JSX.Element;
};

export const BasicCard = ({ product, children }: BasicCardProps) => {
  const {
    _id,
    title: item_name,
    artist: item_by,
    img: img_src,
    original_price,
    price: item_price,
    rating: item_rating,
    qty,
    desc: item_desc,
  } = product;

  return (
    <div className="card w-30 basic">
      <AddToWishlistButton product={product} />
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
          <Rating rating={item_rating} />
          <div className="price-sec">
            <span className="body-l">Rs.{item_price}</span>
            <span className="strike-price">Rs.{original_price}</span>
            {qty && <QuantitySection _id={_id} qty={qty} />}
          </div>
          <div className="card-actions">{children}</div>
        </div>
      </div>
    </div>
  );
};
