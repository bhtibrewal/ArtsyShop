import axios from "axios";

export const fetchProduct = async (setProduct, productId) => {
  try {
    const res = await axios.get(`/api/products/${productId}`);
    setProduct(res.data.product);
  } catch (e) {
    console.log(e.error);
  }
};
