import { Link } from "react-router-dom";

export const Categories = ({ link, category, img_url }) => {
  return (
    <Link to="/products">
      <div className="categories">
        <img src={img_url} alt={category} />
        <button className="btn category-name">{category}</button>
      </div>
    </Link>
  );
};
