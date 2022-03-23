import { Link } from "react-router-dom";

export const Categories = ({ category: { id, categoryName, img_src } }) => {
  return (
    <Link to={`/category/${categoryName}`}>
      <div className="categories">
        <img src={img_src} alt={categoryName} />
        <h2 className="category-name"><strong>{categoryName}</strong></h2>
      </div>
    </Link>
  );
};
