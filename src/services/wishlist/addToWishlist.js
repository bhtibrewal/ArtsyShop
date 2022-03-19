import axios from "axios"

export const addToWishlist = async ({ product, productDispatch }) => {
    try {
        const { data: { wishlist } } = await axios.post("/api/user/wishlist", { product });
        productDispatch({ type: "ADD_TO_WISHLIST", payload: wishlist })
    }
    catch (e) {
        console.log(e);
    }
}