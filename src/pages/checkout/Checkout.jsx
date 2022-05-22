import "../cart_page/cart_page.css";
import "../user_profile/user_profile.css";
import "./checkout.css";
import { useToast, useUserContext } from "../../context";
import { TotalBill } from "../cart_page/component/TotalBill";
import { AddressesList, AddressForm } from "./components";
import { useState } from "react";

export const Checkout = () => {
  const { showToast } = useToast();
  const {
    userData: { firstName, lastName, createdAt },
  } = useUserContext();
  const [showAddressForm, setShowAddressForm] = useState(false);

  return (
    <main className="main user-page">
      <section className="sec user-header-sec flex-col">
        <div className="avatar-text avatar-m">{`${firstName[0]}${lastName[0]}`}</div>
        <h1>Hello {firstName}</h1>
        <p className="body-l">
          Artsy collector since {createdAt?.split("T")[0]}
        </p>
      </section>
      <h1>Secure Checkout in just 2 steps</h1>

      <section className="user-grid">
        <div className="address-management sec">
          <p className="body-l">Shipping and Billing Address</p>
          {/* form */}
          {!showAddressForm ? (
            <p onClick={() => setShowAddressForm((prev) => !prev)}>
              <i className="fa-solid fa-plus"></i> Add New Address
            </p>
          ) : (
            <AddressForm setShowAddressForm={setShowAddressForm} />
          )}
          {/* list */}
          <AddressesList />
        </div>
        <TotalBill
          onClick={() =>
            showToast({
              title: "Payment Integration coming soon",
              type: "primary",
            })
          }
        />
      </section>
    </main>
  );
};
