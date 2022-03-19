import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonPrimary, HorizontalCard } from "../../components";
import { useProductContext, useUserContext } from "../../context";
import { useDocumentTitle } from "../../custom_hooks/useDocumentTitle";
import { addToCart } from "../../services/cart/addToCart";
export function inCart(cart, art) {
  if (cart.length === 0) return false;
  return cart.some((item) => item._id === art._id);
}
export const ProductDetails = () => {
  const { loginState } = useUserContext();
  const { productId } = useParams();

  useDocumentTitle(``);
  const navigate = useNavigate();
  const { productState, productDispatch } = useProductContext();
  const { productList, wishList, cart } = productState;
  const product = productList.find((item) => item._id === productId);
  console.log(productId, productState);

  return (
    <main className="main">
      <HorizontalCard item={product}>
        {!inCart(cart, product) ? (
          <ButtonPrimary
            onClick={() =>
              loginState
                ? addToCart({ product, productDispatch })
                : navigate("/sign-in")
            }
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Add to Cart</span>
          </ButtonPrimary>
        ) : (
          <ButtonPrimary onClick={() => navigate("/cart")}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Go To Cart</span>
          </ButtonPrimary>
        )}
      </HorizontalCard>
    </main>
  );
};
