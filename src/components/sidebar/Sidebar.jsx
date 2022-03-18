import { useProductFilter } from "../../context/ProductsFilterContext";
import { useAxios } from "../../custom_hooks/useAxios";
import "./sidebar.css";

export const Sidebar = () => {
  const { filterState, filterStateDispatch } = useProductFilter();
  const {
    showCategories,
    showOutOfStock,
    showFastDelivery,
    sortBy,
    ratingAbove,
  } = filterState;
  // console.log(showCategories);
  const categoriesList = useAxios("/api/categories", "GET", "categories");

  return (
    <aside className="product_page-aside">
      <div className="flex-col">
        <label>
          <input
            type="checkbox"
            checked={showOutOfStock}
            onChange={() => {
              filterStateDispatch({ type: "OUT_OF_STOCK" });
            }}
          />{" "}
          <span className="body-l">Include Out Of Stock</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={showFastDelivery}
            onChange={() => {
              filterStateDispatch({ type: "FAST_DELIVERY" });
            }}
          />
          <span className="body-l">Fast Delivery</span>
        </label>
      </div>
      <h3>Category</h3>
      <div className="flex-col">
        {categoriesList?.map((category) => {
          const {categoryName} = category;
          return (
            <label key={categoryName}>
              <input
                type="checkbox"
                checked={showCategories.some(
                  (item) => item === categoryName
                )}
                onChange={(e) =>
                  e.target.checked
                    ? filterStateDispatch({
                        type: "ADD_CATEGORY",
                        payload: categoryName,
                      })
                    : filterStateDispatch({
                        type: "REMOVE_CATEGORY",
                        payload: categoryName,
                      })
                }
              />
              <span className="body-l">{categoryName}</span>
            </label>
          );
        })}
      </div>
      <div className="flex-col"></div>
      <h3>Sort By</h3>
      <div className="flex-col">
        <p className="body-l">Price</p>
        <label>
          <input
            type="radio"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              filterStateDispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
            }
            name="sort_by_price"
          />
          High To Low
        </label>
        <label>
          <input
            type="radio"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              filterStateDispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
            }
            name="sort_by_price"
          />
          Low To High
        </label>
      </div>
      <div className="flex-col">
        <p className="body-l">Rating</p>
        {Array(4)
          .fill()
          .map((e, index) => {
            return (
              <label key={4 - index}>
                <input
                  type="radio"
                  checked={ratingAbove === 4 - index}
                  onChange={() =>
                    filterStateDispatch({ type: "RATING", payload: 4 - index })
                  }
                  name="rating_sector"
                />
                Above {4 - index} Star
              </label>
            );
          })}
      </div>
    </aside>
  );
};
