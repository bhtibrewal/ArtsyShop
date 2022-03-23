import axios from "axios";

export const fetchCategories = async (productDispatch) => {
  try {
    const res = await axios.get("/api/categories");
    if (res.status === 200)
      productDispatch({
        type: "ADD_CATEGORIES",
        payload: res.data.categories,
      });
  } catch (e) {
    console.log(e.error);
  }
};
