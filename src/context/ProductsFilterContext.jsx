import { createContext, useContext, useEffect, useReducer } from "react";
import { filterProductReducer } from "../reducers/filterProductReducer.js";


const ProductFilterContext = createContext();

const ProductFilterProvider = ({ children }) => {
  const initialFilterState = {
    sortBy: null,
    showCategories: [],
    showFastDelivery: false,
    showOutOfStock: true,
    ratingAbove: 1,
    priceRange: 1000,
    searchKeyword:'',
  };
  
  const [filterState, filterStateDispatch] = useReducer(
    filterProductReducer,

    /* if there is prev filterState stored in the local storage then get it,
       otherwise set the filterState to initialFilterState */
    JSON.parse(localStorage.getItem("filterState")) ?? initialFilterState
  );
  
  //store the filter state in local storage
  useEffect(() => {
    localStorage.setItem("filterState", JSON.stringify(filterState));
  }, [filterState]);

  return (
    <ProductFilterContext.Provider
      value={{ filterState, filterStateDispatch, initialFilterState }}
    >
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
