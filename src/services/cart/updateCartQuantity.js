import axios from "axios"

export const updateCartQuantity = async ({ _id, action, productDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/user/cart/${_id}`, { action });
        if (res.status === 200) {
            productDispatch({ type: "ADD_TO_CART", payload: res.data.cart })
            showToast({ title: `quantity ${action.type === 'increment' ? 'increased' : 'decreased'}`, type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}