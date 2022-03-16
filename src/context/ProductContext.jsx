import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { useFetch } from "../custom_hooks/useAxios";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

  // const fetchProduct = async () => {
  //   try {
  //     const res = await axios.get("api/products");
  //     if (res.status === 200) {
  //       setProductList(res.data.products);
  //     }
  //   } catch {
  //     throw new Error("error");
  //   }
  // };

  const fetchCart = async () => {
    try {
      const res = await axios("/api/user/cart", {
        method: "GET",
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MmIxNjYwYi0yMTg2LTRiMmEtOTRlOC1mYzNmODUyYjcxNTQiLCJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwiaWF0IjoxNjQ3MzQ3OTY1fQ.CsaRbb8b9jWPRPUMY8OIt-TWE1bcRbFiUDz22YbNAoY",
        },
      });
      return res.data.cart;
    } catch (error) {
      console.log(`couldn't get cart`, { error });
    }
  };

  const initialProductState = {
    productList: [],
    wishList: [],
    cart: [],
  };
  const product_reducer_fn = (_state, { type, payload }) => {
    switch (type) {
      case "ADD_PRODUCT":
        return { ..._state, productList: payload };
      case "ADD_TO_CART":
        return;
      case "REMOVE_FROM_CART":
        return;
      case "ADD_TO_WISHLIST":
        return;
      case "REMOVE_FROM_WISHLIST":
        return;
      default:
        return;
    }
  };
  const [productState, productDispatch] = useReducer(
    product_reducer_fn,
    initialProductState
  );
  console.log("this is productstate", productState);
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(`useProductContext must be used inside a context provider`);
  }
  return context;
};

export { ProductContextProvider, useProductContext };
