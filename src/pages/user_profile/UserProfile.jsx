import { useUserContext } from "../../context";
import { ButtonPrimary } from "../../components";

export const UserProfile = () => {
  const {
    userData: { firstName, lastName, createdAt },
  } = useUserContext();
  return (
    <main className="main user-page">
      {/* <!-- header section --> */}
      <section className="sec user-header-sec flex-col">
        <div className="avatar-text avatar-m">{`${firstName[0]}${lastName[0]}`}</div>
        <h1>Hello {firstName}</h1>
        <p className="body-l">Artsy collector since {createdAt.split("T")[0]}</p>
      </section>
      <h1>My Account</h1>

      {/* <!-- grid  --> */}
      <section className="user-grid">
        {/* <!-- contact details from --> */}
        <form className="form sec contact-dets">
          <div className="flex-col inputs">
            <h2>User Contact Details</h2>
            <label className="artsy-input">
              <input type="text" />
              <span className="input-label">First Name</span>
            </label>
            <label className="artsy-input">
              <input type="text" />
              <span className="input-label">Email</span>
            </label>
            <label className="artsy-input">
              <input type="text" />
              <span className="input-label">Phone Number</span>
            </label>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>

        {/* <!-- payment details from --> */}
        <div className="sec flex-col payment-dets">
          <h2>Payment Settings</h2>
          <p className="body-l">My Card</p>
          <i className="fa-solid fa-credit-card primary-text fa-8x"></i>
          <p>Add a card for future use.</p>
          <ButtonPrimary>add a card</ButtonPrimary>
        </div>
      </section>
    </main>
  );
};
