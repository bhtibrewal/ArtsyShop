import { TextOverMediaCard } from "../../components";
import "./product_page.css";

export const ProductPage = () => {
  return (
    <main className="main">
      {/*  header section  */}
      <section className="page-header-section">
        <div className="section-bg">
          <img
            src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature.90ad9bf4.jpg"
            srcset="
              https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/mobile/categorie/nature.4613eed6.jpg       800w,
              https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature1152.73034e4d.jpg 1152w,
              https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature1920.4a74dce3.jpg 1920w,
              https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature3440.90ad9bf4.jpg 3440w
            "
            sizes="(min-width:768px) 100vw, 260px"
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
          <button className="btn dropdown-box" onClick="">
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
            <input value="" type="range" min="0" max="1000" step="50" />
            <span>{}</span>
          </div>
        </div>

        {/*  sort by dropdown  */}
        <div className="dropdown-container sortBy-con">
          <button className="btn dropdown-btn" onClick="">
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
      <section className="products-sec">
        <div className="grid-3 products-grid">
          {Array(12)
            .fill("")
            .map(() => {
              return (
                <TextOverMediaCard
                  item={{
                    item_name: "La Porta Rossa Sulla Salita Art Print",
                    item_by: "Guido Borelli",
                    item_desc: "",
                    item_price: 18,
                    item_rating: 4,
                  }}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
};
