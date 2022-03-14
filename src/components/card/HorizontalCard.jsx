import React from 'react'

export const HorizontalCard = () => {
  return (
    <div className="card w-40 hori">
          <div className="content">
            <img
              className="card-img"
              src="https://render.fineartamerica.com/images/images-new-artwork/images-medium-5/la-porta-rossa-sulla-salita-guido-borelli.jpg?v=2"
              alt=""
            />

            <div className="card-header">
              <h1>La Porta Rossa Sulla Salita Art Print</h1>
              <h2>by Guido Borelli</h2>
              <div className="card-body">
                Visit ten places on our planet that are undergoing the biggest
                changes today.
              </div>
              <div className="price-sec">
                <h3>$18</h3>
                <span className="strike-price">$22</span>
              </div>
            </div>
          </div>

          <div className="card-actions">
            <button className="btn btn-primary">
              <i className="fa-solid fa-cart-shopping"></i>
              remove from cart
            </button>

            <button className="btn outline-btn-secondary">
              move to wishlist
            </button>
          </div>
        </div>
  )
}
