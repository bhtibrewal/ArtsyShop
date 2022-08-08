import { FormEvent, useState } from "react";
import { ButtonPrimary } from "../../../components";
import { useToast, useUserContext } from "../../../context";
import { addNewAddress } from "../../../services";
import { updateAddress } from "../../../services/address/updateAddress";
import { Address } from "../../../types";
type AddressFormProps = {
  setShowAddressForm?: Function;
  addressId?: number;
  addressToEdit?: Address;
  setAdressEditable?: Function;
};
export const AddressForm = ({
  setShowAddressForm,
  addressId,
  addressToEdit,
  setAdressEditable,
}: AddressFormProps) => {
  const { userDataDispatch } = useUserContext();
  const { showToast } = useToast();
  const addressEntries = { street: "", city: "", country: "", zip_code: "" };
  const [inputValues, setInputValues] = useState(
    addressToEdit ? { ...addressToEdit } : { ...addressEntries }
  );

  const submitAddressFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      Object.keys(inputValues).some(
        (element) => inputValues[element as keyof Address] === ""
      )
    )
      showToast({
        title: `Fields cannot be empty`,
        type: "error",
      });
    else if (addressId) {
      updateAddress({
        addressId,
        address: inputValues,
        userDataDispatch,
        showToast,
      });
      setAdressEditable?.(false);
    } else {
      addNewAddress({
        address: inputValues,
        userDataDispatch,
        showToast,
      });
      setShowAddressForm?.(false);
      setInputValues({ ...addressEntries });
    }
  };

  return (
    <form className="form " onSubmit={submitAddressFormHandler}>
      <div className="flex-col inputs">
        {Object.keys(inputValues).map((element) => {
          if (element !== "_id")
            return (
              <label key={element} className="artsy-input">
                <input
                  type="text"
                  value={inputValues[element as keyof Address]}
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
        <>
          <span>Continue</span>
          <i className="fa-solid fa-angle-right"></i>
        </>
      </ButtonPrimary>
    </form>
  );
};
