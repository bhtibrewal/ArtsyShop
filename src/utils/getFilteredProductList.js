export const getFilteredProductList = (functionsArr, productsArr, filterState) => {
    functionsArr.forEach((currFunction) => productsArr = currFunction(productsArr, filterState))
    return productsArr;
}

export const sortBy = (productsArr, filterState) => {
    if (true)
        return productsArr;
}
export const filterBy = (productsArr, filterState) => {
    return productsArr;
}
