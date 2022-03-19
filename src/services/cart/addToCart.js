import axios from "axios"

export const addToCart = async ({ product, productDispatch }) => {

    try {
        const { data: { cart } } = await axios.post("/api/user/cart", { product });
        productDispatch({ type: "ADD_TO_CART", payload: cart })
    }
    catch (e) {
        console.log(e.error);
    }
}