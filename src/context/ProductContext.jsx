import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAxios } from "../custom_hooks/useAxios";
import { product_reducer_fn } from "../reducers/product_reducer_fn";
import { useUserContext } from "./UserContext";

const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const initialProductState = {
    productList: [],
    wishList: [],
    cart: [],
  };

  const [productState, productDispatch] = useReducer(
    product_reducer_fn,
    initialProductState
  );
  const { loginState } = useUserContext();
  const fetchedProductList = useAxios("api/products", "GET", "products");

  const fetchWishlist = useAxios(
    "/api/user/wishlist",
    "GET",
    "wishlist",
    undefined,
    loginState
  );
  const fetchedCart = useAxios(
    "/api/user/cart",
    "GET",
    "cart",
    undefined,
    loginState
  );

  useEffect(() => {
    if (fetchedProductList.length !== 0)
      productDispatch({
        type: "ADD_PRODUCT_LIST",
        payload: fetchedProductList,
      });
  }, [fetchedProductList]);
  useEffect(() => {
    productDispatch({ type: "ADD_WISHLIST", payload: fetchWishlist });
  }, [fetchWishlist]);
  useEffect(() => {
    productDispatch({ type: "ADD_CART", payload: fetchedCart });
  }, [fetchedCart]);
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
