import { createContext, useContext, useEffect, useReducer } from "react";
import { product_reducer_fn } from "../reducers/product_reducer_fn.js";
import {
  fetchCart,
  fetchCategories,
  fetchProductList,
  fetchWishlist,
} from "../services";

import { useUserContext } from "./UserContext";

const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const initialProductState = {
    productList: [],
    categoriesList: [],
    wishList: [],
    cart: [],
  };
  const [productState, productDispatch] = useReducer(
    product_reducer_fn,
    initialProductState
  );

  useEffect(() => {
    fetchProductList(productDispatch);
    fetchCategories(productDispatch);
  }, []);
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
