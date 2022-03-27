import "./cart_page.css";
import {
  ButtonPrimary,
  HorizontalCard,
} from "../../components";
import { TotalBill } from "./component/TotalBill";
import { useProductContext } from "../../context";
import { useDocumentTitle } from "../../custom_hooks/useDocumentTitle";
import { removeFromCart } from "../../services/cart/removeFromCart";
import { useNavigate } from "react-router-dom";
import { EmptyCart } from "./component/EmptyCart";

export const CartPage = () => {
  useDocumentTitle("| Cart Page");
  const navigate = useNavigate();

  const { productState, productDispatch } = useProductContext();
  const { cart } = productState;

  if (cart.length === 0) return <EmptyCart />;
  return (
    <main className="main cart-page">
      <section className="cart-sec">
        <p className="body-l">My Cart({cart?.length})</p>

        {cart?.map((product) => {
          const { _id } = product;
          return (
            <HorizontalCard key={_id} product={product}>
              <ButtonPrimary
                onClick={() => removeFromCart({ _id, productDispatch })}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Remove from Cart</span>
              </ButtonPrimary>
            </HorizontalCard>
          );
        })}
      </section>

      <TotalBill onClick={() => navigate("/checkout")} />
    </main>
  );
};
