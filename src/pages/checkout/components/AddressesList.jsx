import {  useUserContext } from "../../../context";
import { AddressCard } from "./AddressCard";

export const AddressesList = () => {
  const {
    userData: { addresses },
  } = useUserContext();

  return (
    <div className="address-list">
      {addresses.map((address) => {
        return (
          <AddressCard
            key={address._id}
            address={address}
          />
        );
      })}
    </div>
  );
};
