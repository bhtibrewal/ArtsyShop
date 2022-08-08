import axios from "axios";

export const removeFromCart = async ({
  _id,
  productDispatch,
  showToast,
}: {
  _id: number;
  productDispatch: Function;
  showToast: Function;
}) => {
  try {
    const res = await axios.delete(`/api/user/cart/${_id}`);
    if (res.status === 200) {
      productDispatch({ type: "REMOVE_FROM_CART", payload: res.data.cart });
      showToast({ title: "removed from cart", type: "success" });
    }
  } catch (e) {
    if (e instanceof Error)
      showToast({ title: e?.response?.data?.errors, type: "error" });
    else console.error(e);
  }
};
