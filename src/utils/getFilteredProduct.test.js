import { filterByStock, filterByDelivery } from "./getFilteredProductList";

describe("testing get filtered products utils", () => {
    const productsArr = [{
        title: "Old Village",
        price: 400,
        original_price: 420,
        rating: 2,
        rated_by: 10,
        categoryName: "Abstraction",
        inStock: true,
        fastDelivery: false,
    },
    {
        title: "Pretty in Pink",
        price: 100,
        original_price: 120,
        rating: 4,
        rated_by: 10,
        categoryName: "Abstraction",
        inStock: false,
        fastDelivery: false,
    },
    {
        title: "The Light",
        price: 733,
        original_price: 750,
        rating: 4,
        rated_by: 10,
        categoryName: "Abstraction",
        inStock: false,
        fastDelivery: true,
    },
    {
        title: "Original Face 29",
        price: 320,
        original_price: 350,
        rating: 5,
        rated_by: 20,
        categoryName: "Portrait",
        inStock: true,
        fastDelivery: false,
    }];
    test("filter products based on in Stock", () => {
        // Arrange
        const expectedResult = [{
            title: "Old Village",
            price: 400,
            original_price: 420,
            rating: 2,
            rated_by: 10,
            categoryName: "Abstraction",
            inStock: true,
            fastDelivery: false,
        },
        {
            title: "Original Face 29",
            price: 320,
            original_price: 350,
            rating: 5,
            rated_by: 20,
            categoryName: "Portrait",
            inStock: true,
            fastDelivery: false,
        }];
        const showOutOfStock = false;
        // ACT
        const result = filterByStock(productsArr, { showOutOfStock });
        // ASSERT
        expect(result).toEqual(expectedResult)
    })
    test("filter prouducts based on delivery", () => {
        const expectedResult = [{
            title: "The Light",
            price: 733,
            original_price: 750,
            rating: 4,
            rated_by: 10,
            categoryName: "Abstraction",
            inStock: false,
            fastDelivery: true,
        }];
        let showFastDelivery = true;
        let result = filterByDelivery(productsArr, { showFastDelivery })
        expect(result).toEqual(expectedResult);
       
        showFastDelivery = false;
        result = filterByDelivery(productsArr, { showFastDelivery });
        expect(result).toEqual(productsArr);
    })
})