import { useProductContext } from "../../../context";
import { Categories } from "./Categories";

export const CategoriesSection = () => {
  const {
    productState: { categoriesList },
  } = useProductContext();
  return (
    <section className="category-section">
      <h1>Categories</h1>
      <div className="grid-4 category-grid">
        {categoriesList.map((category) => {
          return <Categories key={category._id} category={category} />;
        })}
      </div>
    </section>
  );
};
