import "./product_page.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  OutlineButtonPrimary,
  ProductListingCard,
  Sidebar,
} from "../../components";
import { useProductContext, useProductFilter } from "../../context";
import { useDocumentTitle } from "../../custom_hooks/useDocumentTitle";
import { getFilteredProductList } from "../../utils/getFilteredProductList";
import { Dropdown, PageHeader, Search } from "./components";

export const ProductPage = () => {
  useDocumentTitle("| Product Page");
  const { categoryname } = useParams();
  const [category, setCategory] = useState();
  const [sidebarDisplay, setSidebarDisplay] = useState(true);
  const {
    productState: { productList, categoriesList },
  } = useProductContext();
  const { filterState, filterStateDispatch, initialFilterState } =
    useProductFilter();
  const { priceRange } = filterState;

  useEffect(() => {
    if (categoryname) {
      const foundCategory = categoriesList?.find(
        (item) => item.categoryName === categoryname
      );
      setCategory(foundCategory);
      foundCategory &&
        filterStateDispatch({
          type: "SET_CATEGORY",
          payload: foundCategory?.categoryName,
        });
    } else
      filterStateDispatch({
        type: "CLEAR_CATEGORY",
        payload: initialFilterState,
      });
  }, [categoriesList, categoryname]);

  const filteredProductList = getFilteredProductList(
    [...productList],
    filterState
  );

  if (productList.length === 0) return <div>Loading...</div>;
  return (
    <main className="main">
      {/*  header section  */}
      {category && <PageHeader category={category} />}
      {/* menu section */}
      <section className="menu-sec ">
        {/*  */}
        <OutlineButtonPrimary
          className="aside-toggle-btn"
          onClick={() => setSidebarDisplay((prev) => !prev)}
        >
          <span>Filter</span>
          <i
            className={`fa-solid ${
              sidebarDisplay ? "fa-angle-left" : "fa-angle-right"
            }`}
          ></i>
        </OutlineButtonPrimary>

        <Search />

        <div className="price-sec">
          <h3>Price</h3>
          <div className='price-range'>
            <input
              type="range"
              max="1000000"
              min="0"
              step="100000"
              value={priceRange}
              onChange={(e) =>
                filterStateDispatch({
                  type: "PRICE_RANGE",
                  payload: Number(e.target.value),
                })
              }
            />
            <span className="slider-tooltip">Rs. {priceRange}</span>
          </div>
        </div>

      </section>

      {/* products section */}
      <div className="main-sec">
        {sidebarDisplay && <Sidebar />}
        <section className="products-sec">
          <div className=" products-grid">
            {filteredProductList.map((product) => {
              return <ProductListingCard key={product._id} item={product} />;
            })}
          </div>
        </section>
      </div>
    </main>
  );
};
