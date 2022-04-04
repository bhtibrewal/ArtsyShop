export const filterProductReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH":
      return { ...state, searchKeyword: payload };
    case "OUT_OF_STOCK":
      return { ...state, showOutOfStock: !state.showOutOfStock };
    case "FAST_DELIVERY":
      return { ...state, showFastDelivery: !state.showFastDelivery };
    case "ADD_CATEGORY":
      return { ...state, showCategories: [...state.showCategories, payload] };
    case "SET_CATEGORY":
      return { ...state, showCategories: [payload] }
    case "REMOVE_CATEGORY":
      return {
        ...state,
        showCategories: state.showCategories.filter(
          (category) => category !== payload
        ),
      };
    case "CLEAR_CATEGORY":
      return { ...state, showCategories: [] };
    case "PRICE_RANGE":
      return { ...state, priceRange: payload };
    case "RATING":
      return { ...state, ratingAbove: payload };
    case "SORT_BY":
      return { ...state, sortBy: payload };
    case "CLEAR":
      return { ...payload };

    default:
      return { ...state };
  }
};