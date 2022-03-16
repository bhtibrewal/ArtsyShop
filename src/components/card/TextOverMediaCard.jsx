export const TextOverMediaCard = ({ item }) => {

  const {
    title: item_name,
    artist: item_by,
    desc: item_desc,
    img: img_src,
    item_original_price,
    price: item_price,
    rating: item_rating,
  } = item;
  return (
    <div className="card w-30 text-o-media">
      <div className="content">
        <img className="card-img" src={img_src} alt="" />
        <button className="icon favourite-icon">
          <i className="fa-regular fa-heart fa-2x"></i>
        </button>

        <div className="card-header">
          <h1>{item_name}</h1>
          <h2>by {item_by}</h2>
          <div className="price-sec">
            <h3>${item_price}</h3>
            <span className="strike-price">${item_original_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
