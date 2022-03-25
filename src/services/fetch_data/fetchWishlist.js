import axios from "axios";

export const fetchWishlist = async (productDispatch) => {
  const AUTH_TOKEN = localStorage.getItem("token");
  if (AUTH_TOKEN)
    axios.defaults.headers.common["authorization"] = AUTH_TOKEN;
  try {
    const res = await axios.get("/api/wishlist");
    if (res.status === 200)
      productDispatch({ type: "ADD_WISHLIST", payload: res.data.wishlist });
  }
  catch (e) {
    console.log(e.error);
  }
};
