export const Categories = ({ link, category, img_url }) => {
  return (
    <a href={link}>
      <div className="categories">
        <img src={img_url} alt={category} />
        <button className="btn category-name">{category}</button>
      </div>
    </a>
  );
};
