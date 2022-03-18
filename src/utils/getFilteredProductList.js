export const getFilteredProductList = (functionsArr, productsArr, filterState) => {
    functionsArr.forEach((currFunction) => productsArr = currFunction(productsArr, filterState))
    return productsArr;
}

export const sortByPrice = (productsArr, { sortBy }) => {
    if (sortBy === null)
        return productsArr;
    return productsArr.sort((a, b) => sortBy === "HIGH_TO_LOW" ? b.price - a.price : a.price - b.price)
}
export const filterByCategory = (productsArr, { showCategories }) => {
    if (showCategories.length === 0)
        return productsArr;
    return productsArr.filter(product => showCategories.some(category => category === product.categoryName))
}
export const filterByStock = (productsArr, { showOutOfStock }) => {
    if (showOutOfStock)
        return productsArr;
    return productsArr.filter(product => product.inStock)
}
export const filterByDelivery = (productsArr, { showFastDelivery }) => {
    if (!showFastDelivery)
        return productsArr;
    return productsArr.filter(product => product.fastDelivery)
}
export const filterByRating = (productsArr, { ratingAbove }) => {
    if (ratingAbove === 1)
        return productsArr;
    return productsArr.filter(product => product.rating >= ratingAbove)
}
