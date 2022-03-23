import axios from "axios";

export const fetchCart = async (productDispatch) => {
  const AUTH_TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = AUTH_TOKEN;
  try {
    const res = await axios.get("/api/cart");
    if (res.status === 200)
      productDispatch({ type: "ADD_CART", payload: res.data.cart });
  }
  catch(e) {
    console.error(e.error);
  }
};
