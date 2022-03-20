import axios from "axios"

export const removeFromWishlist = async ({ _id, productDispatch }) => {
    try {
        const { data: { wishlist } } = await axios.delete(`/api/user/wishlist/${_id}`);
        productDispatch({ type: "REMOVE_FROM_WISHLIST", payload: wishlist })
    }
    catch (e) {
        console.log(e.error);
    }
}
