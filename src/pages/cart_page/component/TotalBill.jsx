import { useState } from "react";
import {
  ButtonPrimary,
  OutlineButtonPrimary,
  InputField,
} from "../../../components";
import { useProductContext, useToast } from "../../../context";

export const TotalBill = ({ onClick }) => {
  const {
    productState: { cart, couponDiscount },
    productDispatch,
  } = useProductContext();
  const { showToast } = useToast();
  const [coupon, setCoupon] = useState("");
  const applyCouponHandler = (e) => {
    e.preventDefault();
    if (coupon === "ARTSY10000") {
      productDispatch({ type: "SET_COUPON_DISCOUNT", payload: 10000 });
      setCoupon("");
      showToast({ title: "coupon applied", type: "success" });
    } else showToast({ title: "It is not a valid coupon", type: "error" });
  };

  const priceDetails = {
    price: cart?.reduce((acc, item) => acc + item.original_price * item.qty, 0),
    discount: cart?.reduce(
      (acc, item) => acc + (item.original_price - item.price) * item.qty,
      0
    ),
    shipping: cart?.reduce((acc, item) => acc + item.shipping, 0) || 50000,
  };
  return (
    <section className="cart-price-sec">
      <p>
        <strong>Price Details</strong>
      </p>
      <hr />
      <div className="calc-part">
        <span>Price ( Items)</span>
        <span>Rs.{priceDetails.price}</span>
        <span>Discount</span>
        <span>-Rs.{priceDetails.discount}</span>
        <span>Shipping Charges</span>
        <span>Rs.{priceDetails.shipping}</span>
        <span>Coupon Discount</span>
        <span>Rs. {couponDiscount}</span>
      </div>
      <hr />
      <div className="total-part">
        <span>
          <strong>Total</strong>
        </span>
        <span>
          <strong>
            Rs.
            {priceDetails.price -
              priceDetails.discount +
              priceDetails.shipping -
              couponDiscount}
          </strong>
        </span>
      </div>
      <hr />
      <form onSubmit={applyCouponHandler}>
        <p>Do You have a VIP Coupon</p>
        <InputField
          placeholder="Try ARTSY10000"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <OutlineButtonPrimary>Apply coupon</OutlineButtonPrimary>
      </form>
      <label>
        <input type="checkbox" />
        <span className="checkbox-text"> This artwork is a gift.</span>
      </label>

      <ButtonPrimary onClick={onClick}>
        <span>place order</span>
        <i className="fa-solid fa-arrow-right-long"></i>
      </ButtonPrimary>
    </section>
  );
};
