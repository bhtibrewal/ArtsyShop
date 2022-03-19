import "./cart_page.css";
import {
  ButtonPrimary,
  HorizontalCard,
  OutlineButtonSecondary,
} from "../../components";
import { TotalBill } from "./component/TotalBill";
import { useProductContext } from "../../context";
import { useDocumentTitle } from "../../custom_hooks/useDocumentTitle";
import { removeFromCart } from "../../services/cart/removeFromCart";

export const CartPage = () => {
  useDocumentTitle("Cart Page");
  
  const { productState, productDispatch } = useProductContext();
  const { wishList, cart } = productState;

  return (
    <main className="main cart-page">
      <section className="cart-sec">
        <p className="body-l">My Cart({cart.length})</p>
        {cart.map((product) => {
          const { _id } = product;
          return (
            <HorizontalCard key={_id} item={product}>
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

      <TotalBill />
    </main>
  );
};
