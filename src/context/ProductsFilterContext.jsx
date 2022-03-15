const ProductFilterContext = createContext()
const filter_product_reducer = (state, { type, payload }) => {
    switch (type) {
        case "SEARCH":
            return { ...state, }
        case "FILTERBY":
            return;
        case "SortBY":
            return { ...state, };
        default:
            return;
    }
}