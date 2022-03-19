import "./wishlist_page.css";
import { BasicCard, ButtonPrimary } from "../../components";
import { useProductContext } from "../../context";

export const WishlistPage = () => {
  const { productState, productDispatch } = useProductContext();
  const { wishList, cart } = productState;

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
          <h2>No items in Wishlist</h2>
        ) : (
          wishList.map((item) => {
            return (
              <BasicCard key={item._id} item={item}>
                <ButtonPrimary>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span> Add to Cart</span>
                </ButtonPrimary>
              </BasicCard>
            );
          })
        )}
      </section>
    </main>
  );
};
