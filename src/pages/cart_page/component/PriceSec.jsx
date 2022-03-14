import React from "react";

export const PriceSec = () => {
  return (
    <section className="cart-price-sec">
      <p>
        <strong>Price Details</strong>
      </p>
      <hr />
      <div className="calc-part">
        <span>Price (2 Items)</span>
        <span>₹853,200</span> <span>Discount</span>
        <span>-₹85,000</span> <span>Shipping Charges</span>
        <span>₹50,000</span>
      </div>
      <hr />
      <div className="total-part">
        <span>
          <strong>Total</strong>
        </span>
        <span>
          <strong>₹817,000</strong>
        </span>
      </div>
      <hr />
      <label>
        <input type="checkbox" />
        <span className="checkbox-text">This artwork is a gift. </span>
      </label>
      <a href="/pages/checkout/checkout.html">
        <button className="btn btn-primary">
          <span>place order</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </a>
    </section>
  );
};
