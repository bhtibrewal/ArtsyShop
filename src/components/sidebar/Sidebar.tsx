import "./sidebar.css";
import { useProductContext, useProductFilter } from "../../context";
import { Category } from "../../types";

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
    initialFilterState,
  } = useProductFilter();
  const {
    productState: { categoriesList },
  } = useProductContext();
  return (
    <aside className="product_page-aside">
      <div className="flex-align-center heading">
        <h3>Filters</h3>
        {/* clear button */}
        <span
          className="link-text-primary"
          onClick={() =>
            filterStateDispatch({ type: "CLEAR", payload: initialFilterState })
          }
        >
          Clear
        </span>
      </div>
      {/* out of stock and fast delivery */}
      <div className="aside-sec">
        <label>
          <input
            type="checkbox"
            checked={showOutOfStock}
            onChange={() => {
              filterStateDispatch({ type: "OUT_OF_STOCK" });
            }}
          />
          <span className="checkbox-text">Include Out Of Stock</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={showFastDelivery}
            onChange={() => {
              filterStateDispatch({ type: "FAST_DELIVERY" });
            }}
          />
          <span className="checkbox-text">Fast Delivery</span>
        </label>
      </div>

      {/* categories */}
      <div className="aside-sec">
        <p className="body-l">Category</p>
        {categoriesList?.map((category: Category) => {
          const { categoryName } = category;
          return (
            <label key={categoryName}>
              <input
                type="checkbox"
                checked={showCategories.some(
                  (item: string) => item === categoryName
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
              <span className="capitalize checkbox-text">{categoryName}</span>
            </label>
          );
        })}
      </div>

      {/* sort by price */}
      <div className="aside-sec">
        <p className="body-l">Price</p>
        {["HIGH_TO_LOW", "LOW_TO_HIGH"].map((element, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                checked={sortBy === element}
                onChange={() =>
                  filterStateDispatch({ type: "SORT_BY", payload: element })
                }
                name="sort_by_price"
              />
              <span className="checkbox-text">
                {element.split("_").join(" ")}
              </span>
            </label>
          );
        })}
      </div>
      <div className="aside-sec">
        <p className="body-l">Rating</p>
        {Array(4)
          .fill(0)
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
                <span className="checkbox-text">
                  {4 - index} Star and Above
                </span>
              </label>
            );
          })}
      </div>
    </aside>
  );
};
