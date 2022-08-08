import "./order_page.css";
import { useProductContext } from "../../context";
import { Navigate } from "react-router-dom";

export const OrderPage = () => {
  const { productState } = useProductContext();
  const {
    order: { items, totalAmount },
  } = productState;

  if (!items) return <Navigate to="/" />;
  return (
    <main className="main center">
      <section className="order-details">
        <h2>Order Details</h2>
        <div className="order">
          {items.map(({ title, artist, price }) => {
            return (
              <div className="order-item">
                <p>{title}</p>
                <p>by {artist}</p>
                <p>{price}</p>
              </div>
            );
          })}
        </div>
        <p className="body-l">
          <strong>Order Total: {totalAmount}</strong>
        </p>
        <p>Delivery within 7-9 working days</p>
      </section>
    </main>
  );
};
