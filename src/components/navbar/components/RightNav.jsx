export const RightNav = ({onClick}) => {
    return (
      <div className="right-side">
        <div onClick={onClick}>
          <i className="fa-regular fa-user"></i>
        </div>
  
        <a className="favourite" href="/pages/wishlist/wishlist.html">
          <i className="fa-regular fa-heart"></i>
          <span className="items">25</span>
        </a>
  
        <a className="cart" href="/pages/cart/cart.html">
          <i className="fa-solid fa-bag-shopping"></i>
          <span className="items">25</span>
        </a>
      </div>
    );
  };