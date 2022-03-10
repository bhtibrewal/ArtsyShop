export const CollectionItem = ({ bg_img, children }) => {
  return (
    <a href="" className="collection-items">
      <div className="collection-image">
        <img alt="collection image " className="collection-image" src={bg_img} />
      </div>
      {children}
    </a>
  );
};
