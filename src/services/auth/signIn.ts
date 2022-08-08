import axios from "axios";

export const signIn = async ({
    setSigninError,
    data,
    userDataDispatch,
    productDispatch,
    setIsUserLoggedIn,
    showToast,
    keepMeLoggedIn
}:{
    setSigninError:Function,
    data?: {},
    userDataDispatch:Function,
    productDispatch:Function,
    setIsUserLoggedIn:Function,
    showToast:Function,
    keepMeLoggedIn:Boolean
}) => {
    try {
        const res = await axios.post("/api/auth/login", data);
        if (res.status === 200) {
            const {
                data: {
                    foundUser: {
                        firstName, lastName, email, createdAt, cart, wishlist, addresses
                    },
                    encodedToken
                }
            } = res;
            userDataDispatch({
                type: "LOGIN_USER",
                payload: {
                    firstName, lastName, email, createdAt, cart, wishlist, addresses
                }
            })
            setIsUserLoggedIn(true);
            axios.defaults.headers.common["authorization"] = encodedToken;
            productDispatch({ type: "ADD_CART_WISHLIST", payload: { cart, wishlist } });
            showToast({ title: 'logged in successfully', type: 'success' });
            localStorage.setItem("token", encodedToken);
            localStorage.setItem('user', JSON.stringify({
                firstName, lastName, email, createdAt, addresses
            }))
        }
        return res.data;
    } catch (err) {
        if (err instanceof Error)
        setSigninError(err?.response?.data?.errors);
        else console.log("Unexpected error", err);
        return err;
    }
}