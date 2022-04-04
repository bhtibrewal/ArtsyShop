import { createContext, useContext, useEffect, useReducer } from "react";
import { productStateReducer } from "../reducers/productStateReducer.js";
import { fetchCategories, fetchProductList } from "../services";

const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const initialProductState = {
    productList: [],
    categoriesList: [],
    wishList: [],
    cart: [],
  };
  const [productState, productDispatch] = useReducer(
    productStateReducer,
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
