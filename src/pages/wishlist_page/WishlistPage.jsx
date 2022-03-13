import "./wishlist_page.css";
import { BasicCard, ButtonPrimary } from "../../components";

const item = {
  item_name: "La Porta Rossa Sulla Salita Art Print",
  item_by: "Guido Borelli",
  item_desc:
    "Visit ten places on our planet that are undergoing the biggest changes today.",
  item_price: 18,
  item_original_price: 22,
  item_rating: 4,
};

export const WishlistPage = () => {
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
        {Array(6)
          .fill()
          .map(() => {
            return (
              <BasicCard item={item}>
                <ButtonPrimary>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span> add to cart</span>
                </ButtonPrimary>
              </BasicCard>
            );
          })}
      </section>
    </main>
  );
};
