import axios from "axios"

export const removeFromWishlist = async ({ _id, productDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/user/wishlist/${_id}`);
        if (res.status === 200) {
            productDispatch({ type: "REMOVE_FROM_WISHLIST", payload: res.data.wishlist });
            showToast({ title: 'removed from wishlist', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}
