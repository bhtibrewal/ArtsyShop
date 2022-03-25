import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../../components";

export const EmptyCart = () => {
    const navigate = useNavigate();
  return (
    <main className="main cart-page">
      <section className="cart-sec empty-cart">
        <h2>My Cart(0)</h2>
        <img
          className="empty-cart-gif"
          src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif"
        />
        <p className="body-l">
          Looks like you haven't added any artwork to your cart.
        </p>
        <ButtonPrimary onClick={() => navigate("/products")}>
          <span>Start Collecting</span>
          <i className="fa-solid fa-arrow-right" />
        </ButtonPrimary>
      </section>
    </main>
  );
};
