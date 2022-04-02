import { useProductFilter } from "../../../context";

export const Search = ({ className }) => {
  const {
    filterState: { searchKeyword },
    filterStateDispatch,
  } = useProductFilter();
  return (
    <div className={`artsy-input icon-input search-input ${className}`}>
      <i className="fas fa-search"></i>
      <input
        placeholder="Search..."
        type="text"
        value={searchKeyword}
        onChange={(e) =>
          filterStateDispatch({ type: "SEARCH", payload: e.target.value })
        }
      />
    </div>
  );
};
