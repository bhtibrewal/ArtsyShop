import axios from "axios";


export const fetchCategory = async (categoryId, setProducts) => {
  try {
    const res = await axios.get(`/api/categories/${categoryId}`);
    console.log(res);
    if (res.status === 200)
      setProducts(res.data.category);
  } catch (e) {
    console.log(e.error);
  }
};
