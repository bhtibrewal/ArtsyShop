import "./wishlist_page.css";
import { AddToCartButton, BasicCard } from "../../components";
import { useDocumentTitle } from "../../custom_hooks";
import { PageHeader } from "./component/PageHeader";
import { useProductContext } from "../../context";

export const WishlistPage = () => {
  useDocumentTitle("| Wshlist Page");
  const {
    productState: { wishList },
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
                <AddToCartButton className="btn-primary" product={product} />
              </BasicCard>
            );
          })
        )}
      </section>
    </main>
  );
};
