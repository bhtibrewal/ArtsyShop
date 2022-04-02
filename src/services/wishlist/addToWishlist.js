import axios from "axios"

export const addToWishlist = async ({ product, productDispatch, showToast }) => {
    try {
        const res = await axios.post("/api/user/wishlist", { product });
        if (res.status === 201) {
            productDispatch({ type: "ADD_TO_WISHLIST", payload: res.data.wishlist })
            showToast({ title: 'added to wishlist', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.respoanse.data.errors, type: 'error' });
    }
}