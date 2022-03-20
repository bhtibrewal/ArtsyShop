import { useNavigate, useParams } from "react-router-dom";
import { ButtonPrimary, HorizontalCard } from "../../components";
import { useProductContext, useUserContext } from "../../context";
import { addToCart } from "../../services";
import { inCart } from "../../utils/cart.utils";

export const ProductDetails = () => {
  const { loginState } = useUserContext();
  const { productId } = useParams();

  const navigate = useNavigate();
  const { productState, productDispatch } = useProductContext();
  const { productList, wishList, cart } = productState;
  const product = productList.find((item) => item._id === productId);
  console.log(productId, productState);
  return (
    <main className="main">
      <HorizontalCard item={product}>
        <ButtonPrimary
          onClick={() => {
            loginState
              ? !inCart(cart, product)
                ? addToCart({ product, productDispatch })
                : navigate("/cart")
              : navigate("/sign-in");
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{!inCart(cart, product) ? "Add to Cart" : "Go To Cart"}</span>
        </ButtonPrimary>
      </HorizontalCard>
    </main>
  );
};
