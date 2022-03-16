import axios from "axios";


export const signupHandler = async () => {

    try {
        const res = await axios.post(`/api/auth/signup`, {
            firstName: "Adarsh",
            lastName: "Balika",
            email: "adarshbalika@neog.camp",
            password: "adarshBalika",
        });

        console.log("res", res)
    }
    catch {
        console.log("error");
    }

    // saving the encodedToken in the localStorage

};



