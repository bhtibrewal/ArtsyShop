import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAxios } from "../custom_hooks/useAxios";
import { useUserContext } from "./UserContext";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const initialProductState = {
    productList: [],
    wishList: [],
    cart: [],
  };
  const product_reducer_fn = (_state, { type, payload }) => {
    switch (type) {
      case "ADD_PRODUCT_LIST":
        return { ..._state, productList: payload };
      case "ADD_WISHLIST":
        return { ..._state, wishList: [...payload] };
      case "ADD_CART":
        return { ..._state, cart: [...payload] };

      case "ADD_TO_CART":
        return { ..._state };
      case "REMOVE_FROM_CART":
        return { ..._state };
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
