import { useState } from "react";
import { useProductContext, useToast, useUserContext } from "../../../context";
import { deleteAddress } from "../../../services";
import { AddressForm } from "./AddressForm";

export const AddressCard = ({
  address,
}) => {
  const { showToast } = useToast();
  const { userDataDispatch } = useUserContext();
  const {
    productState: { selectedAddress },
    productDispatch,
  } = useProductContext();
  const [adressEditable, setAdressEditable] = useState();

  return (
    <div
      className={`address-card ${
        selectedAddress === address._id ? "selected-address" : ""
      }`}
      onClick={() =>
        productDispatch({ type: "SET_SELECTED_ADDRESS", payload: address._id })
      }
    >
      {adressEditable ? (
        <AddressForm
          addressId={address._id}
          addressToEdit={address}
          setAdressEditable={setAdressEditable}
        />
      ) : (
        <>
          <button
            className="btn card-delete-btn"
            onClick={() =>
              deleteAddress({
                addressId: address._id,
                userDataDispatch,
                showToast,
              })
            }
          >
            <i className="fa-solid fa-trash"></i>
          </button>

          <div className="address-card-content">
            {Object.keys(address).map((element) => {
              if (element !== "_id")
                return (
                  <p key={element}>
                    <strong className="capitalize">
                      {element?.split("_").join(" ")}
                    </strong>
                    : {address[element]}
                  </p>
                );
            })}
            <div onClick={() => setAdressEditable(true)}>
              <i className="fa-regular fa-pen-to-square"></i>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
