import { productStateReducer } from "./productStateReducer"

describe("testing product state reducer", () => {

    test("add product to cart", () => {
        const initialState = {
            cart: [{
                title: "Original Face 29",
                artist: "Eugen Dick",
                price: 320,
            },]
        }
        const action = {
            type: "ADD_TO_CART",
            payload: [{
                title: "Original Face 29",
                artist: "Eugen Dick",
                price: 320,
            }, {
                title: "The Light",
                artist: "Tran Tuan",
                price: 733,
            }]
        }
        const expectedState = {
            cart: [{
                title: "Original Face 29",
                artist: "Eugen Dick",
                price: 320,
            }, {
                title: "The Light",
                artist: "Tran Tuan",
                price: 733,
            }]
        }
        const state = productStateReducer(initialState, action);

        expect(state).toEqual(expectedState)
    })

})