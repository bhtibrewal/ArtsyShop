import axios from "axios";

export const signIn = async ({
    data,
    userDataDispatch,
    setLoginState,
    navigate
}) => {
    try {
        const {
            data: {
                foundUser,
                encodedToken
            }
        } = await axios.post("/api/auth/login", data)
        userDataDispatch({
            type: "LOGIN_USER",
            payload: foundUser
        })
        setLoginState(true);
        localStorage.setItem("token", encodedToken)
        navigate("/")
    } catch (e) {
        console.log(e.response.data);
    }
}