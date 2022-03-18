import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import {
  CartPage,
  HomePage,
  ProductDetails,
  ProductPage,
  SignIn,
  SignUp,
  WishlistPage,
} from "./pages";
import MockAPI from "./backend/Mockman";
import { ProductFilterProvider } from "./context/ProductsFilterContext";

export const WithNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/products"
            element={
              <ProductFilterProvider>
                <ProductPage />
              </ProductFilterProvider>
            }
          />
          <Route path={`/product-details`} element={<ProductDetails />}></Route>
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/mockman" element={<MockAPI />} />
        </Route>

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
