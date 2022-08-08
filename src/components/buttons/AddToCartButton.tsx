import { useNavigate } from "react-router-dom";
import { useProductContext, useToast, useUserContext } from "../../context";
import { addToCart } from "../../services";
import { Product } from "../../types";
import { inCart } from "../../utils/cart.utils";

export const AddToCartButton = ({
  className,
  product,
}: {
  className: string;
  product: Product;
}) => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserContext();
  const { showToast } = useToast();
  const {
    productState: { cart },
    productDispatch,
  } = useProductContext();
  const isInCart = inCart(cart, product);
  const handleAddToCart = (product : Product) => {
    if (isUserLoggedIn)
      if (!isInCart) addToCart({ product, productDispatch, showToast });
      else navigate("/cart");
    else navigate("/sign-in");
  };
  return (
    <button
      className={`btn ${className}`}
      onClick={() => handleAddToCart(product)}
    >
      <i className="fa-solid fa-cart-shopping"></i>
      <span>{!isInCart ? "Acquire This Artwork" : "Go To Cart"}</span>
    </button>
  );
};
