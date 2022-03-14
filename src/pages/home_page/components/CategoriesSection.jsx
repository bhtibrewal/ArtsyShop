import axios from "axios";
import { useEffect, useState } from "react";
import { Categories } from "./Categories";

export const CategoriesSection = () => {
  const [categoryList, setList] = useState([]);
  useEffect(() => {
    fetchCategory();
    return ()=>{};
  },[]);
  const fetchCategory = async () => {
    const res = await axios.get("/api/categories");
    try {
      setList(res.data.categories.map((i) => i.categoryName));
    } catch {
      throw new Error("error");
    }
  };
  const category_list = [
    "Abstraction",
    "Nature",
    "Landscape",
    "urban",
    "Street",
    "Medival",
    "Pop Culture",
    "Portrait",
  ];
  return (
    <section className="category-section">
      <h1>Categories</h1>
      <div className="grid-4 category-grid">
        {categoryList.map((i) => {
          return (
            <Categories
              key={i}
              link={"/pages/product/product.html"}
              category={i}
              img_url={
                "https://cdn.singulart.com/artworks/v2/cropped/3813/main/carousel/1202203_f053297adb8623bd3c615562c7521b67.jpeg"
              }
            />
          );
        })}
      </div>
    </section>
  );
};
