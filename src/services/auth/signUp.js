import axios from "axios";

export const signUp = async ({ data, userDataDispatch, setLoginState, navigate }) => {
    try {
        const {
            data: {
                foundUser, encodedToken
            }
        } = await axios.post("/api/auth/signup", data)
        // userDataDispatch({ type: "LOGIN_USER", payload: foundUser })
        // setLoginState(true);
        // localStorage.setItem("token", encodedToken);
        navigate("/sign-in")
    }
    catch (e) {
        console.log(e.error);
    }
}