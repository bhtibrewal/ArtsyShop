import axios from "axios";

export const signUp = async ({ data, userDataDispatch, setLoginState, navigate }) => {
    try {
        const {
            data: {
                foundUser, encodedToken
            }
        } = await axios.post("/api/auth/signup", data)
        
        navigate("/sign-in")
    }
    catch (e) {
        console.log(e.response.data.errors);
    }
}