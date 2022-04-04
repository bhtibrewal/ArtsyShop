import axios from "axios"

export const removeFromCart = async ({ _id, productDispatch, showToast }) => {

    try {
        const res = await axios.delete(`/api/user/cart/${_id}`);
        if (res.status === 200) {
            productDispatch({ type: "REMOVE_FROM_CART", payload: res.data.cart })
            showToast({ title: 'removed from cart', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}