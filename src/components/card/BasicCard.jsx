import { RatingPalleteIcon } from "../index";

export const BasicCard = ({ item: art, children }) => {
  const {
    title: item_name,
    artist: item_by,
    img: img_src,
    item_original_price,
    price: item_price,
    rating: item_rating,
    desc: item_desc,
  } = art;
  return (
    <div className="card w-30 basic">
      <button className="icon favourite-icon">
        <i className="fa-regular fa-heart fa-2x"></i>
      </button>
      <div className="content">
        <img className="card-img" src={img_src} alt="" />

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
