import axios from "axios";

export const signIn = async ({ data, userDataDispatch, setLoginState }) => {
    try {
        const { data: {
            foundUser, encodedToken
        } } = await axios.post("/api/auth/login", data)
        userDataDispatch({ type: "LOGIN_USER", payload: foundUser })
        setLoginState(true);
        localStorage.setItem("token", encodedToken)
    }
    catch (e) {
        console.log(e.response.data);
    }
}