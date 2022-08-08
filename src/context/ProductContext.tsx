import { createContext, useContext, useEffect, useReducer } from "react";
import { productStateReducer } from "../reducers/productStateReducer";
import { fetchCategories, fetchProductList } from "../services";
import { Address, Category, Product, ProductStateType } from "../types";


const initialProductState = {
  productList: [],
  categoriesList: [],
  wishList: [],
  cart: [],
  couponDiscount: 0,
  selectedAddress: {},
  order: [],
} as unknown as ProductStateType;

type ProductContextType = {
  productState: ProductStateType;
  productDispatch: Function;
};

const ProductContext = createContext<ProductContextType | null>(null);
const ProductContextProvider = ({ children }: { children: JSX.Element }) => {
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
