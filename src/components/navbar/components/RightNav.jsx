import { Link } from "react-router-dom";
export const RightNav = ({ onClick }) => {
  return (
    <div className="right-side">
      
      <Link to="/mockman">Mockman</Link>

      <div onClick={onClick}>
        <i className="fa-regular fa-user"></i>
      </div>

      <Link to="/wishlist" className="favourite">
        <i className="fa-regular fa-heart"></i>
        <span className="items">25</span>
      </Link>

      <Link to="/cart" className="cart">
        <i className="fa-solid fa-bag-shopping"></i>
        <span className="items">25</span>
      </Link>
    </div>
  );
};
