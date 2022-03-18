import axios from "axios";
import { useEffect, useState } from "react";
import { useAxios } from "../../../custom_hooks/useAxios";
import { Categories } from "./Categories";

export const CategoriesSection = () => {
  const categoriesList = useAxios("/api/categories", "GET", "categories");

  // const category_list = [
  //   "Abstraction",
  //   "Nature",
  //   "Landscape",
  //   "urban",
  //   "Street",
  //   "Medival",
  //   "Pop Culture",
  //   "Portrait",
  // ];
  return (
    <section className="category-section">
      <h1>Categories</h1>
      <div className="grid-4 category-grid">
        {categoriesList.map((i) => {
          return (
            <Categories
              key={i.categoryName}
              link={"/pages/product/product.html"}
              category={i.categoryName}
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
