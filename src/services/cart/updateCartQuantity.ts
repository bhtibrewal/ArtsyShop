import axios from "axios";

export const updateCartQuantity = async ({
  _id,
  action,
  productDispatch,
  showToast,
}: {
  _id: number;
  action: { type: "increment" | "decrement" };
  productDispatch: Function;
  showToast: Function;
}) => {
  try {
    const res = await axios.post(`/api/user/cart/${_id}`, { action });
    if (res.status === 200) {
      productDispatch({ type: "ADD_TO_CART", payload: res.data.cart });
      showToast({
        title: `quantity ${
          action.type === "increment" ? "increased" : "decreased"
        }`,
        type: "success",
      });
    }
  } catch (e) {
    if (e instanceof Error)
      showToast({ title: e?.response?.data?.errors, type: "error" });
    else console.error(e);
  }
};
