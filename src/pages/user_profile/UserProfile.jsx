import { useToast, useUserContext } from "../../context";
import { ButtonPrimary } from "../../components";
import { useDocumentTitle } from "../../custom_hooks";
import { AddressForm } from "../checkout/components/AddressForm";
import { AddressesList } from "../checkout/components/AddressesList";

export const UserProfile = () => {
  const {
    userData: { firstName, lastName, createdAt },
  } = useUserContext();
  const { showToast } = useToast();
  useDocumentTitle(`| ${firstName}`);
  return (
    <main className="main user-page">
      {/* <!-- header section --> */}
      <section className="sec user-header-sec flex-col">
        <div className="avatar-text avatar-m">{`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}</div>
        <h1>Hello {firstName}</h1>
        <p className="body-l">
          Artsy collector since {createdAt.split("T")[0]}
        </p>
      </section>
      <h1>My Account</h1>

      {/* <!-- grid  --> */}
      <section className="user-grid">
        {/* <!-- contact details from --> */}
        <div className="address-management sec">
          {/* form */}
          <AddressForm />
          {/* list */}
          <AddressesList />
        </div>

        {/* <!-- payment details from --> */}
        <div className="sec flex-col payment-dets">
          <h2>Payment Settings</h2>
          <p className="body-l">My Card</p>
          <i className="fa-solid fa-credit-card primary-text fa-8x"></i>
          <p>Add a card for future use.</p>
          <ButtonPrimary
            onClick={() =>
              showToast({
                title: "Payment Integration coming soon",
                type: "primary",
              })
            }
          >
            add a card
          </ButtonPrimary>
        </div>
      </section>
    </main>
  );
};
