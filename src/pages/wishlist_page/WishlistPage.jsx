import "./wishlist_page.css";
import { BasicCard, ButtonPrimary } from "../../components";
import { useProductContext, useToast, useUserContext } from "../../context";
import { useDocumentTitle } from "../../custom_hooks";
import { PageHeader } from "./component/PageHeader";
import { inCart } from "../../utils/cart.utils";
import { addToCart } from "../../services";
import { useNavigate } from "react-router-dom";

export const WishlistPage = () => {
  useDocumentTitle("| Wshlist Page");
  const { loginState } = useUserContext();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const {
    productState: { wishList, cart },
    productDispatch,
  } = useProductContext();

  return (
    <main className="main">
      <PageHeader />

      <section className="wishlist-sec">
        {wishList.length === 0 ? (
          <p className="body-l">
            Looks like you haven't added any artwork to your wishlist.
          </p>
        ) : (
          wishList.map((product) => {
            return (
              <BasicCard key={product._id} product={product}>
                <ButtonPrimary
                  onClick={() => {
                    loginState
                      ? !inCart(cart, product)
                        ? addToCart({ product, productDispatch, showToast })
                        : navigate("/cart")
                      : navigate("/sign-in");
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>
                    {!inCart(cart, product) ? "Add to Cart" : "Go To Cart"}
                  </span>
                </ButtonPrimary>
              </BasicCard>
            );
          })
        )}
      </section>
    </main>
  );
};
