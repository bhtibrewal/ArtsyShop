import React from "react";
import { useProductContext, useToast } from "../../../context";
import { updateCartQuantity } from "../../../services";

export const QuantitySection = ({ _id, qty }) => {
  const {
    productState: { cart },
    productDispatch,
  } = useProductContext();
  const { showToast } = useToast();
  return (
    <div className="qty-sec flex-align-center">
      <button
        className={`btn btn-primary ${qty <= 1 && "disabled-btn"}`}
        onClick={() => {
          if (qty > 1)
            updateCartQuantity({
              _id,
              action: { type: "decrement" },
              productDispatch,
              showToast,
            });
        }}
      >
        -
      </button>
      <input className="artsy-input" type="text" value={qty} readOnly />
      <button
        className="btn btn-primary"
        onClick={() =>
          updateCartQuantity({
            _id,
            action: { type: "increment" },
            productDispatch,
            showToast,
          })
        }
      >
        +
      </button>
    </div>
  );
};
