export const getFilteredProductList = (productsArr, filterState) => {
    const functionsArr = [
        filterByPriceRange, filterByCategory, filterByStock, filterByDelivery, filterByRating, sortByPrice, search,
    ];
    /* 
        productArr = functionsArr[0](productsArr, filterState);
        productArr = functionsArr[1](productsArr, filterState);
        ...
        productArr = functionsArr[length-1](productsArr, filterState);
     */
    functionsArr.forEach((currentFunction) => productsArr = currentFunction(productsArr, filterState))
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

export const filterByPriceRange = (productsArr, { priceRange }) => {
    return productsArr.filter(product => product.price <= priceRange)
}
export const search = (productsArr, { searchKeyword }) => {
    if (searchKeyword === '') return productsArr;
    return productsArr.filter(product => product.title.toLowerCase().includes(searchKeyword.toLowerCase()));
}