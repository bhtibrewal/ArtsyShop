import { createContext, useContext, useEffect, useReducer } from "react";

const ProductFilterContext = createContext();

const ProductFilterProvider = ({ children }) => {
  const initialFilterState = {
    sortBy: null,
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
      case "OUT_OF_STOCK":
        return { ...state, showOutOfStock: !state.showOutOfStock };
      case "FAST_DELIVERY":
        return { ...state, showFastDelivery: !state.showFastDelivery };
      case "ADD_CATEGORY":
        return { ...state, showCategories: [...state.showCategories, payload] };
      case "REMOVE_CATEGORY":
        return {
          ...state,
          showCategories: state.showCategories.filter(
            (category) => category !== payload
          ),
        };
      case "PRICE_RANGE":
        return { ...state, priceRange: payload };
      case "RATING":
        return { ...state, ratingAbove: payload };
      case "SORT_BY":
        return { ...state, sortBy: payload };
      default:
        return {...state};
    }
  };

  const [filterState, filterStateDispatch] = useReducer(
    filter_product_reducer,

    //if there is prev filterState stored in the local storage then get it,
    //  otherwise set the filterState to initialFilterState
    JSON.parse(localStorage.getItem("filterState")) ?? initialFilterState
  );
  console.log(filterState);
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
