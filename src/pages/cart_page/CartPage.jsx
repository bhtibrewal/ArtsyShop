import "./cart_page.css";
import { useEffect } from "react";
import { HorizontalCard } from "../../components";
import { TotalBill } from "./component/TotalBill";
import { useProductContext } from "../../context";

export const CartPage = () => {
  const { productState } = useProductContext();
//   console.log(productState.cart);
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
