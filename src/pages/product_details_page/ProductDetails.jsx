import "./product_details_page.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleProductCard } from "../../components";
import { useDocumentTitle } from "../../custom_hooks";
import { fetchProduct } from "../../services";

export const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productId) fetchProduct(setProduct, productId);
  }, []);

  useDocumentTitle(`| ${product.title}`);

  if (product === null) return <h1> Loading...</h1>;
  return (
    <main className="main center">
      <SingleProductCard product={product} />
    </main>
  );
};
