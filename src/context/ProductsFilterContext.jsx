import { createContext, useContext, useEffect, useReducer } from "react";

const ProductFilterContext = createContext();

const ProductFilterProvider = ({ children }) => {
  const initialFilterState = {
    showCategories: [],
    showFastDelivery: false,
    showOutOfStock: true,
    ratingAbove: 1,
    priceRange: 1000000,
  };
  const filter_product_reducer = (state, { type, payload }) => {
    switch (type) {
      case "SEARCH":
        return { ...state };
      case "FILTER_BY":
        return;
      case "SORT_BY":
        return { ...state };
      default:
        return;
    }
  };

  const [filterState, filterStateDispatch] = useReducer(
    filter_product_reducer,

    //if there is prev filterState stored in the local storage then get it,
    //  otherwise set the filterState to initialFilterState
    JSON.parse(localStorage.getItem("filterState")) ?? initialFilterState
  );

  //store the filter state in local storage
  useEffect(() => {
    localStorage.setItem("filterState", JSON.stringify(filterState));
  }, [filterState]);

  return (
    <ProductFilterContext.Provider value={{ filterState, filterStateDispatch }}>
      {children}
    </ProductFilterContext.Provider>
  );
};
const useProductFilter = () => {
  const context = useContext(ProductFilterContext);
  if (!context) {
    throw new Error(
      `use useProductFilter must be used inside a context provider`
    );
  }
  return context;
};
export { ProductFilterProvider, useProductFilter };
