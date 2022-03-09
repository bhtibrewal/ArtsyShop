import "./navbar.css";

export const LeftNav = () => {
  return (
    <a href="/">
      <h3>
        <i class="fa-brands fa-shopify"></i>Artsy Shop
      </h3>
    </a>
  );
};
export const Search = () => {
  return (
    <div class="artsy-input icon-input">
      <i class="fas fa-search"></i>
      <input placeholder="Search..." type="text" />
    </div>
  );
};
export const RightNav = () => {
  return (
    <div class="right-side">
      <div onclick="openLogin()">
        <i class="fa-regular fa-user"></i>
      </div>

      <a class="favourite" href="/pages/wishlist/wishlist.html">
        <i class="fa-regular fa-heart"></i>
        <span class="items">25</span>
      </a>

      <a class="cart" href="/pages/cart/cart.html">
        <i class="fa-solid fa-bag-shopping"></i>
        <span class="items">25</span>
      </a>
    </div>
  );
};
export const Navbar = (props) => {
  return (
    <header class="arstyShop-header header">
      {props.leftNav}
      {props.search}
      {props.rightNav}
    </header>
  );
};
  