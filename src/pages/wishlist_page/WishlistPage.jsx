import "./wishlist_page.css";
import { BasicCard } from "../../components";
import { useProductContext } from "../../context";
import { useDocumentTitle } from "../../custom_hooks";

export const WishlistPage = () => {
  useDocumentTitle("| Wshlist Page");
  const {
    productState: { wishList },
  } = useProductContext();

  return (
    <main className="main">
      <section className="page-header-section">
        <div className="section-bg">
          <img
            src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banner_wishlist_no_connect.cbbca931.jpg"
            alt=""
          />
        </div>
        <div className="section-content flex-col">
          <i className="fas fa-heart fa-4x"></i>
          <h1>My Favourites</h1>
        </div>
      </section>

      <section className="wishlist-sec">
        {wishList.length === 0 ? (
          <p className="body-l">
            Looks like you haven't added any artwork to your wishlist.
          </p>
        ) : (
          wishList.map((product) => {
            return <BasicCard key={product._id} product={product} />;
          })
        )}
      </section>
    </main>
  );
};
