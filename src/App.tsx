import "./App.css";
import { useEffect } from "react";
import {
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import {
  CartPage,
  Checkout,
  HomePage,
  OrderPage,
  Page404,
  ProductDetails,
  ProductPage,
  SignIn,
  SignUp,
  UserProfile,
  WishlistPage,
} from "./pages";
import { useTheme, useUserContext } from "./context";
import { privateRouting } from "./utils/privateRouting";
import { Toast } from "./components";

export const WithNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  const { isUserLoggedIn } = useUserContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    privateRouting({ isUserLoggedIn, pathname, navigate });
  }, [pathname, isUserLoggedIn]);
  const { darkMode } = useTheme();

  return (
    <div className={`body ${darkMode && "dark-theme"}`}>
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/category/:categoryname" element={<ProductPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-details" element={<OrderPage/>}/>
        </Route>

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Toast position={"top-left"} />
    </div>
  );
}

export default App;
