import "./sidebar.css";
import { useProductFilter } from "../../context/ProductsFilterContext";
import { useAxios } from "../../custom_hooks/useAxios";

export const Sidebar = () => {
  const {
    filterState: {
      showCategories,
      showOutOfStock,
      showFastDelivery,
      sortBy,
      ratingAbove,
    },
    filterStateDispatch,
  } = useProductFilter();
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
          />
          <span>Include Out Of Stock</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={showFastDelivery}
            onChange={() => {
              filterStateDispatch({ type: "FAST_DELIVERY" });
            }}
          />
          <span>Fast Delivery</span>
        </label>
      </div>
      <div className="flex-col">
        <p className="body-l">Category</p>
        {categoriesList?.map((category) => {
          const { categoryName } = category;
          return (
            <label key={categoryName}>
              <input
                type="checkbox"
                checked={showCategories.some((item) => item === categoryName)}
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
              <span className="capitalize">{categoryName}</span>
            </label>
          );
        })}
      </div>
      <div className="flex-col">
        <p className="body-l">Price</p>
        {["HIGH_TO_LOW", "LOW_TO_HIGH"].map((element) => {
          return (
            <label>
              <input
                type="radio"
                checked={sortBy === element}
                onChange={() =>
                  filterStateDispatch({ type: "SORT_BY", payload: element })
                }
                name="sort_by_price"
              />
              {element.split("_").join(" ")}
            </label>
          );
        })}
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
                {4 - index} Star and Above
              </label>
            );
          })}
      </div>
    </aside>
  );
};
