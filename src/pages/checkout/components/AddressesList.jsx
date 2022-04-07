import React from 'react'
import { useToast, useUserContext } from '../../../context';
import { deleteAddress } from '../../../services';

export const AddressesList = () => {
    const {
        userData: { addresses },
        userDataDispatch,
      } = useUserContext();
      const { showToast } = useToast();
  return (
    <div className="address-list">
            {addresses.map((address) => {
              return (
                <div key={address._id} className="address-card">
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
                            <strong className="capitalize">{element?.split('_').join(' ')}</strong>:{" "}
                            {address[element]}
                          </p>
                        );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
  )
}
