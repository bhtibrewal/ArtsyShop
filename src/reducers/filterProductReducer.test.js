import { filterProductReducer } from "./filterProductReducer"

describe("testing filters state reducer function", () => {
    test("add category to cateories array", () => {
        const initialState = {
            showCategories: ["Abstraction"]
        }
        const action = {
            type: "ADD_CATEGORY",
            payload: "Portrait"
        }
        const expectedState = {
            showCategories: ["Abstraction", "Portrait"]
        }
        const state = filterProductReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    test("remove category from cateories array", () => {
        const initialState = {
            showCategories: ["Abstraction", "Portrait"]
        }
        const action = {
            type: "REMOVE_CATEGORY",
            payload: "Portrait"
        }
        const expectedState = {
            showCategories: ["Abstraction"]
        }
        const state = filterProductReducer(initialState, action)
        expect(state).toEqual(expectedState)
    });
    
})