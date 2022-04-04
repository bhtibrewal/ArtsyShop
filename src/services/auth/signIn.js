import axios from "axios";

export const signIn = async ({
    setSigninError,
    data,
    userDataDispatch,
    productDispatch,
    setLoginState,
    showToast,
    navigate
}) => {
    try {
        const res = await axios.post("/api/auth/login", data);
        if (res.status === 200) {
            const {
                data: {
                    foundUser: {
                        firstName, lastName, email, createdAt, cart, wishlist
                    },
                    encodedToken
                }
            } = res;
            userDataDispatch({
                type: "LOGIN_USER",
                payload: {
                    firstName, lastName, email, createdAt, cart, wishlist
                }
            })
            setLoginState(true);
            localStorage.setItem("token", encodedToken);
            axios.defaults.headers.common["authorization"] = encodedToken;
            localStorage.setItem('user', JSON.stringify({
                firstName, lastName, email, createdAt
            }))
            productDispatch({ type: "ADD_CART_WISHLIST", payload: { cart, wishlist } });
            navigate(-1);
            showToast({ title: 'logged in successfully', type: 'success' });
        }
    } catch (e) {
        setSigninError(e.response.data.errors);
    }
}