import axios from "axios";
import { fetchCart } from "../fetch_data/fetchCart";
import { fetchWishlist } from "../fetch_data/fetchWishlist";

export const signIn = async ({
    setSigninError,
    data,
    userDataDispatch,
    productDispatch,
    setLoginState,
    navigate
}) => {
    try {
        const {
            data: {
                foundUser: {
                    firstName, lastName, email, createdAt, cart, wishlist
                },
                encodedToken
            }
        } = await axios.post("/api/auth/login", data)
        userDataDispatch({
            type: "LOGIN_USER",
            payload: {
                firstName, lastName, email, createdAt
            }
        })
        setLoginState(true);
        localStorage.setItem("token", encodedToken);
        localStorage.setItem('user', JSON.stringify({
            firstName, lastName, email, createdAt
        }))
        productDispatch({ type: "ADD_CART_WISHLIST", payload:{cart, wishlist} });
        navigate(-1);
    } catch (e) {

        setSigninError(e.response.data.errors);
    }
}