import "./App.css";
import {useEffect} from 'react';
import { Routes, Route, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import {
  CartPage,
  Checkout,
  HomePage,
  ProductDetails,
  ProductPage,
  SignIn,
  SignUp,
  UserProfile,
  WishlistPage,
} from "./pages";
import MockAPI from "./backend/Mockman";
import { ProductFilterProvider, useTheme, useUserContext } from "./context";
import {privateRouting} from './utils/privateRouting'

export const WithNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  const {loginState} = useUserContext();
  const {pathname} = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    privateRouting({loginState, pathname, navigate});
  }, [pathname, loginState]);
  const {darkMode} = useTheme();

  return (
    <div className={`body ${darkMode && 'dark-theme'}`}>
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
          >
          </Route>
           <Route
              path="/category/:categoryname"
              element={
                <ProductFilterProvider>
                  <ProductPage />
                </ProductFilterProvider>
              }
            />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mockman" element={<MockAPI />} />
        </Route>

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
