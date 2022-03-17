import { Link } from "react-router-dom";

export const LeftNav = () => {
  return (
    <Link to="/home">
      <h3 className="left-side">
        <i className="fa-brands fa-shopify"></i>Artsy Shop
      </h3>
    </Link>
  );
};
