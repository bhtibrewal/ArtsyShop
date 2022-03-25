import axios from "axios";

export const signIn = async ({
    setSigninError,
    data,
    userDataDispatch,
    setLoginState,
    navigate
}) => {
    try {
        const {
            data: {
                foundUser: {
                    firstName, lastName, email, createdAt
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
        navigate(-1);
    } catch (e) {

        setSigninError(e.response.data.errors);
    }
}