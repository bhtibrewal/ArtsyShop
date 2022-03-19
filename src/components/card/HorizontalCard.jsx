import React from 'react'

export const HorizontalCard = ({ item: art, children }) => {
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
    <div className="card w-40 hori">
          <div className="content">
            <img
              className="card-img"
              src={img_src}
              alt={`${item_name} ${item_by}`}
            />

            <div className="card-header">
              <h1>{item_name}</h1>
              <h2>by {item_by}</h2>
              <div className="card-body">
               {item_desc}
              </div>
              <div className="price-sec">
                <h3>${item_price}</h3>
                <span className="strike-price">${item_original_price}</span>
              </div>
            </div>
          </div>

          <div className="card-actions">
            {children}
          </div>
        </div>
  )
}
