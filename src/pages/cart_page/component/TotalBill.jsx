import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  ButtonPrimary,
  OutlineButtonPrimary,
  InputField,
} from "../../../components";
import { useProductContext, useToast } from "../../../context";
import { loadScript } from "../utils/loadScript";

export const TotalBill = ({ onClick }) => {
  const navigate = useNavigate();
  const {
    productState: { cart, couponDiscount, selectedAddress },
    productDispatch,
  } = useProductContext();
  const { showToast } = useToast();
  const [coupon, setCoupon] = useState("");

  // apply coupon
  const applyCouponHandler = (e) => {
    e.preventDefault();
    if (coupon === "ARTSY") {
      productDispatch({ type: "SET_COUPON_DISCOUNT", payload: 100 });
      setCoupon("");
      showToast({ title: "coupon applied", type: "success" });
    } else showToast({ title: "It is not a valid coupon", type: "error" });
  };

  // calculte bill details
  const priceDetails = {
    price: cart?.reduce((acc, item) => acc + item.original_price * item.qty, 0),
    discount: cart?.reduce(
      (acc, item) => acc + (item.original_price - item.price) * item.qty,
      0
    ),
    shipping: cart?.reduce((acc, item) => acc + item.shipping, 0) || 100,
  };
  const totalAmount =
    priceDetails.price -
    priceDetails.discount +
    priceDetails.shipping -
    couponDiscount;

  const resetCart = () => {
    productDispatch({
      type: "RESET_CART",
      payload: { items: [...cart], totalAmount },
    });
  };
  const makePayment = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      showToast({
        title: "Razorpay SDK failed to load. Are you online?",
        type: "success",
      });
      return;
    }
    const options = {
      key: process.env.REACT_APP_RAZORPAY_API_KEY,
      currency: "INR",
      amount: amount * 100,
      name: "Artsy Shop",
      description: "Thank you for shopping with ARTSY SHOP",
      handler: async function (response) {
        console.log(response);
        if (response.razorpay_payment_id) {
          resetCart();
          showToast({
            type: "success",
            title: `Items purchased successfully with payment ID: ${response.razorpay_payment_id}`,
          });
          navigate("/order-details");
        }
      },

      prefill: {
        name: "Artsy Shop",
        email: "offer@artsyshop.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrderHandler = () => {
    if (Object.keys(selectedAddress).length === 0)
      showToast({
        title: "select a address before procedding",
        type: "primary",
      });
      else makePayment(totalAmount)
  };
  if (cart.length === 0) return <Navigate to="/" />;
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
            {totalAmount}
          </strong>
        </span>
      </div>
      <hr />
      <form onSubmit={applyCouponHandler}>
        <p>Do You have a VIP Coupon</p>
        <InputField
          placeholder="Try ARTSY"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <OutlineButtonPrimary>Apply coupon</OutlineButtonPrimary>
      </form>
      <label>
        <input type="checkbox" />
        <span className="checkbox-text"> This artwork is a gift.</span>
      </label>

      <ButtonPrimary onClick={onClick ? onClick : placeOrderHandler}>
        <span>place order</span>
        <i className="fa-solid fa-arrow-right-long"></i>
      </ButtonPrimary>
    </section>
  );
};
