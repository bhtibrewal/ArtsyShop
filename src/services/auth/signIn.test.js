import * as axios from "axios";
import { signIn } from "./signIn";

jest.mock("axios");
describe("testing auth services", () => {
    const arg = {
        setSigninError: () => { },
        data: {},
        userDataDispatch: () => { },
        productDispatch: () => { },
        setIsUserLoggedIn: () => { },
        showToast: () => { }
    }
    test("get user details on signIn", async () => {
        const data = {
            foundUser: {
                firstName: "Bhavika", lastName: "Tibrewal", email: "bhtibrewal@gmail.com", cart: [], wishlist: [], addresses: []
            },
            encodedToken: "abcde"
        }

        axios.post.mockResolvedValue({ status: 200, data });

        const result = await signIn(arg);

        expect(axios.post).toHaveBeenCalledWith(`/api/auth/login`, {});
        expect(result).toEqual(data);
    })
       
    test("should return error message ", async () => {
        const err = { status: 500, error: { message: "server error" } }
        axios.post.mockRejectedValue(err);
        const result = await signIn(arg);

        expect(axios.post).toHaveBeenCalledWith(`/api/auth/login`, {});
        expect(result).toEqual(err)
    })
})