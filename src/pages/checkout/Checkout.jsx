import "../cart_page/cart_page.css";
import "../user_profile/user_profile.css";
import { useState } from "react";
import { useUserContext } from "../../context";
import { TotalBill } from "../cart_page/component/TotalBill";
import { ButtonPrimary } from "../../components";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();
  const { userData, userDataDispatch } = useUserContext();
  const [inputValues, setInputValues] = useState({ ...userData.address });
  console.log(inputValues);

  return (
    <main className="main user-page">
      <section className="sec user-header-sec flex-col">
        <div className="avatar-text avatar-m">{`${userData.firstName[0]}${userData.lastName[0]}`}</div>
        <h1>Hello {userData.firstName}</h1>
        <p className="body-l">
          Artsy collector since {userData.createdAt.split("T")[0]}
        </p>
      </section>
      <h1>Secure Checkout in just 2 steps</h1>

      <section className="user-grid">
        <form className="form sec contact-dets">
          <h2>Shipping and Billing Address</h2>
          <div className="flex-col inputs">
             {Object.keys(inputValues).map((element) => {
              return (
                <label key={element} className="artsy-input">
                  <input
                    type="text"
                    value={inputValues[element]}
                    onChange={(e) =>
                      setInputValues((prev) => ({
                        ...prev,
                        [element]: e.target.value,
                      }))
                    }
                  />
                  <span className="input-label">{element}</span>
                </label>
              );
            })}
          </div>
          <ButtonPrimary
            onClick={() =>
              userDataDispatch({ type: "ADD_ADDRESS", payload: inputValues })
            }
          >
            Continue
            <i className="fa-solid fa-angle-right"></i>
          </ButtonPrimary>
        </form>
        <TotalBill onClick={() => navigate("/payment")} />
      </section>
    </main>
  );
};
