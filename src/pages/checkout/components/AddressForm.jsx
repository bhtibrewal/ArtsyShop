import { useState } from "react";
import { ButtonPrimary } from "../../../components";
import { useToast, useUserContext } from "../../../context";
import { addNewAddress } from "../../../services";

export const AddressForm = () => {
  const {
    userData: { addresses },
    userDataDispatch,
  } = useUserContext();
  const { showToast } = useToast();
  const addressEntries = { street: "", city: "", country: "", zip_code: "" };
  const [inputValues, setInputValues] = useState({ ...addressEntries });

  const submitAddressFormHandler = (e) => {
    e.preventDefault();
    if (Object.keys(inputValues).some((element) => inputValues[element] === ""))
      showToast({
        title: `Fields cannot be empty`,
        type: "error",
      });
    else {
      addNewAddress({
        address: inputValues,
        userDataDispatch,
        showToast,
      });
      setInputValues({ ...addressEntries });
    }
  };

  return (
    <form className="form " onSubmit={submitAddressFormHandler}>
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
              <span className="input-label capitalize">
                {element?.split("_").join(" ")}
              </span>
            </label>
          );
        })}
      </div>
      <ButtonPrimary>
        Continue
        <i className="fa-solid fa-angle-right"></i>
      </ButtonPrimary>
    </form>
  );
};
