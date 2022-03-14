import "./cart_page.css";
import { HorizontalCard } from "../../components";
import { TotalBill } from "./component/TotalBill";

export const CartPage = () => {
  return (
    <main className="main cart-page">
      <section className="cart-sec">
        <p className="body-l">My Cart(2)</p>
        <HorizontalCard />
      </section>

      <TotalBill />
    </main>
  );
};
