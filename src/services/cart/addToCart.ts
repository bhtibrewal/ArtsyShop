import axios from "axios";
import { Product } from "../../types";

export const addToCart = async ({
  product,
  productDispatch,
  showToast,
}: {
  product: Product;
  productDispatch: Function;
  showToast: Function;
}) => {
  try {
    const res = await axios.post("/api/user/cart", { product });
    if (res.status === 201) {
      productDispatch({ type: "ADD_TO_CART", payload: res.data.cart });
      showToast({ title: "added to cart", type: "success" });
    }
  } catch (err) {
    if (err instanceof Error)
      showToast({ title: err?.response?.data?.errors, type: "error" });
    else console.error("Unexpected error", err);
  }
};
