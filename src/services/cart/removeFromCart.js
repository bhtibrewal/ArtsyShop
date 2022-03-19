import axios from "axios"

export const removeFromCart = async ({ _id, productDispatch }) => {

    try {
        const { data: { cart } } = await axios.delete(`/api/user/cart/${_id}`);
        productDispatch({ type: "REMOVE_FROM_CART", payload: cart })
    }
    catch (e) {
        console.log(e.error);
    }
}