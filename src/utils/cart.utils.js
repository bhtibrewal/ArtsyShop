export function inCart(cart, art) {
    if (cart.length === 0) return false;
    return cart.some((item) => item._id === art._id);
};

export function inWhisList(wishList, product) {
    return wishList.some((item) => item._id === product._id);
}