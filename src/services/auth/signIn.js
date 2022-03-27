import axios from "axios";

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
                firstName, lastName, email, createdAt, cart, wishlist
            }
        })
        console.log('here');
        setLoginState(true);
        localStorage.setItem("token", encodedToken);
        axios.defaults.headers.common["authorization"] = encodedToken;
        localStorage.setItem('user', JSON.stringify({
            firstName, lastName, email, createdAt
        }))
        productDispatch({ type: "ADD_CART_WISHLIST", payload: {cart, wishlist }});
        navigate(-1);
    } catch (e) {
        setSigninError(e.response.data.errors);
    }
}