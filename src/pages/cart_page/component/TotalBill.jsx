import React from "react";
import {Link} from 'react-router-dom'
import { useProductContext } from "../../../context";

export const TotalBill = () => {
  const {
    productState: { cart }
  } = useProductContext();

  // const priceDetails = {
  //   price: cart.reduce((acc, item) => acc + item.price, 0),
  //   discount: cart.reduce((acc, item) => acc + item.discount, 0),
  //   shipping: cart.reduce((acc, item) => acc + item.shipping, 0),
  //   total: price - discount + shipping,
  // };
  return (
    <section className="cart-price-sec">
      <p>
        <strong>Price Details</strong>
      </p>
      <hr />
      <div className="calc-part">
        <span>Price ( Items)</span>
        <span>₹</span>
        <span>Discount</span>
        <span>-₹</span>
        <span>Shipping Charges</span>
        <span>₹</span>
      </div>
      <hr />
      <div className="total-part">
        <span>
          <strong>Total</strong>
        </span>
        <span>
          <strong>₹</strong>
        </span>
      </div>
      <hr />
      <label>
        <input type="checkbox" />
        <span className="checkbox-text"> This artwork is a gift.</span>
      </label>
      <Link to="me">
        <button className="btn btn-primary">
          <span>place order</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </Link>
    </section>
  );
};
