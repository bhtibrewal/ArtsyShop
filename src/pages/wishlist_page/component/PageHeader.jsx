

export const PageHeader = () => {
  return (
    <section className="page-header-section">
      <div className="section-bg">
        <img
          src="https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banner_wishlist_no_connect.cbbca931.jpg"
          alt="Wishlist Page Header"
        />
      </div>
      <div className="section-content flex-col">
        <i className="fas fa-heart fa-4x"></i>
        <h1>My Favourites</h1>
      </div>
    </section>
  );
};
