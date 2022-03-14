import { HorizontalCard } from "../../components";
import "./cart_page.css";
import { PriceSec } from "./component/PriceSec";

export const CartPage = () => {
  return (
    <main className="main cart-page">
      <section className="cart-sec">
        <p className="body-l">My Cart(2)</p>
        <HorizontalCard />
      </section>

      <PriceSec />
    </main>
  );
};
