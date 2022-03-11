export const TextOverMediaCard = ({ item }) => {
  const {
    item_name,
    item_by,
    item_desc,
    item_original_price = 22,
    item_price,
    item_rating,
  } = item;
  return (
    <div className="card w-30 text-o-media">
      <div className="content">
        <img
          className="card-img"
          src="https://render.fineartamerica.com/images/images-new-artwork/images-medium-5/la-porta-rossa-sulla-salita-guido-borelli.jpg?v=2"
          alt=""
        />
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
          <div>
            {Array(item_rating)
              .fill()
              .map(() => {
                return <i className="fas fa-star filled"></i>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};