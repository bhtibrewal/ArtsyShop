
import { useToast } from "../../../context";

export const CollectionItem = ({ bg_img, children }) => {
  const { showToast } = useToast();
  return (
    <div
      onClick={() =>
        showToast({
          title: "Coming Soon",
          type: "primary",
        })
      }
      className="collection-items"
    >
      <div className="collection-image">
        <img
          alt="collection"
          className="collection-image"
          src={bg_img}
        />
      </div>
      {children}
    </div>
  );
};
