import "./cart_page.css";
import { HorizontalCard } from "../../components";
import { TotalBill } from "./component/TotalBill";
import { useProductContext } from "../../context";
import { useDocumentTitle } from "../../custom_hooks/useDocumentTitle";

export const CartPage = () => {
  useDocumentTitle("Homepage");
  const { productState, productDispatch } = useProductContext();
  const { wishList, cart } = productState;

  return (
    <main className="main cart-page">
      <section className="cart-sec">
        <p className="body-l">My Cart({cart.length})</p>
        {cart.map((item) => {
          return <HorizontalCard key={item._id} item={item} />;
        })}
      </section>

      <TotalBill />
    </main>
  );
};
