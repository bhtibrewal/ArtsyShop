import React from 'react'
import {  useUserContext } from '../../../context';
import { deleteAddress } from '../../../services';
import { AddressCard } from './AddressCard';

export const AddressesList = () => {
    const {
        userData: { addresses },
        userDataDispatch,
      } = useUserContext();
     
  return (
    <div className="address-list">
            {addresses.map((address) => {
              return (
                <AddressCard key={address._id} address={address}/>
              );
            })}
          </div>
  )
}
