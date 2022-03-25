import { ButtonPrimary } from "../../../components";
import { useProductContext } from "../../../context";

export const TotalBill = ({ onClick }) => {
  const {
    productState: { cart },
  } = useProductContext();

  const priceDetails = {
    price: cart?.reduce((acc, item) => acc + item.original_price, 0),
    discount: cart?.reduce(
      (acc, item) => acc + (item.original_price - item.price),
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
      </div>
      <hr />
      <div className="total-part">
        <span>
          <strong>Total</strong>
        </span>
        <span>
          <strong>
            Rs.
            {priceDetails.price - priceDetails.discount + priceDetails.shipping}
          </strong>
        </span>
      </div>
      <hr />
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
