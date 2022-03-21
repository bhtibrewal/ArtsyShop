import { Link } from "react-router-dom";

export const CollectionItem = ({ bg_img, children }) => {
  return (
    <Link to ="me" className="collection-items">
      <div className="collection-image">
        <img alt="collection image " className="collection-image" src={bg_img} />
      </div>
      {children}
    </Link>
  );
};
