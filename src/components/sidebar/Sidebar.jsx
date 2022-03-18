import { useProductFilter } from "../../context/ProductsFilterContext";
import "./sidebar.css";

export const Sidebar = () => {
  const { filterState, filterStateDispatch } = useProductFilter();
  const { showCategories, sortBy, ratingAbove } = filterState;

  return (
    <aside className="product_page-aside">
      <h3>Category</h3>
      <div className="flex-col"></div>
      <h3>Sort By</h3>
      <div className="flex-col">
        <p className="body-l">Price</p>
        <label>
          <input
            type="radio"
            checked={sortBy === "HighToLow"}
            onChange={() => filterStateDispatch({ type: "SORT_BY" })}
            name="sort_by_price"
          />
          High To Low
        </label>
        <label>
          <input
            type="radio"
            checked={sortBy === "LowToHigh"}
            onChange={() => filterStateDispatch({ type: "SORT_BY" })}
            name="sort_by_price"
          />
          Low To High
        </label>
      </div>
      <div className="flex-col">
        <p className="body-l">Rating</p>
        <label>
          <input
            type="radio"
            checked={ratingAbove === 4}
            onChange={() => filterStateDispatch({ type: "FILTER_BY", payload: 4 })}
            name="rating_sector"
          />
          Above 4 Star
        </label>
        <label>
          <input
            type="radio"
            checked={ratingAbove === 3}
            onChange={() => filterStateDispatch({ type: "FILTER_BY", payload: 3 })}
            name="rating_sector"
          />
          Above 3 Star
        </label>
        <label>
          <input
            type="radio"
            checked={ratingAbove === 2}
            onChange={() => filterStateDispatch({ type: "FILTER_BY", payload: 2 })}
            name="rating_sector"
          />
          Above 2 Star
        </label>
        <label>
          <input
            type="radio"
            checked={ratingAbove === 1}
            onChange={() => filterStateDispatch({ type: "FILTER_BY", payload: 1 })}
            name="rating_sector"
          />
          Above 1 Star
        </label>
      </div>
    </aside>
  );
};
