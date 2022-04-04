import axios from "axios"

export const addToCart = async ({ product, productDispatch, showToast }) => {

    try {
        const res = await axios.post("/api/user/cart", { product });
        if (res.status === 201) {
            productDispatch({ type: "ADD_TO_CART", payload: res.data.cart })
            showToast({ title: 'added to cart', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}