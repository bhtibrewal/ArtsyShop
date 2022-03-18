import { Sidebar, TextOverMediaCard } from "../../components";
import { useProductContext, useProductFilter } from "../../context";

import {
  getFilteredProductList,
  sortByPrice,
  filterByStock,
  filterByCategory,
  filterByDelivery,
  filterByRating,
} from "../../utils/getFilteredProductList";
import "./product_page.css";

export const ProductPage = () => {
  const { productState } = useProductContext();
  const { productList } = productState;

  const { filterState, filterStateDispatch } = useProductFilter();
  const { priceRange } = filterState;
  // eslint-disable-next-line
  const filteredProductList = getFilteredProductList(
    [
      sortByPrice,
      filterByCategory,
      filterByStock,
      filterByDelivery,
      filterByRating,
    ],
    [...productList],
    filterState
  );
  console.log(productList, filteredProductList);
  if (productList.length === 0) return <div>Loading...</div>;
  return (
    <main className="main">
      {/*  header section  */}
      <section className="page-header-section">
        <div className="section-bg">
          <img
            src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature.90ad9bf4.jpg"
            alt=""
          />
        </div>
        <div className="section-content">
          <h1>Nature Painting</h1>
        </div>
      </section>

      {/* menu section */}
      <section className="menu-sec">
        <div className="main-drop category-dropdown">
          <h4>Painting Category</h4>
          <button className="btn dropdown-box">
            Nature
            <i className="fa-solid fa-angle-down"></i>
          </button>
          <div className="dropdown">
            <div>Street life</div>
            <div>Nature</div>
            <div>Landscape</div>
            <div>Abstraction</div>
          </div>
        </div>

        {/*  */}
        <div className="price-sec">
          <h3>Price</h3>
          <div>
            <input
              type="range"
              max="1000"
              min="0"
              step="100"
              value={priceRange}
              onChange={(e) =>
                filterStateDispatch({
                  type: "PriceRange",
                  payload: Number(e.target.value),
                })
              }
            />
            <span>{priceRange}</span>
          </div>
        </div>

        {/*  sort by dropdown  */}
        <div className="dropdown-container sortBy-con">
          <button className="btn dropdown-btn">
            Sort By
            <i className="fa-solid fa-angle-down"></i>
          </button>
          <div className="dropdown">
            <div className="body-md">
              <b>Relevance</b>
            </div>
            <div className="body-md">
              <b>Popularity</b>
            </div>
          </div>
        </div>
      </section>

      {/* products section */}
      <div className="main-sec">
        <Sidebar />
        <section className="products-sec">
          <div className="grid-3 products-grid">
            {filteredProductList.map((product) => {
              return <TextOverMediaCard key={product._id} item={product} />;
            })}
          </div>
        </section>
      </div>
    </main>
  );
};
