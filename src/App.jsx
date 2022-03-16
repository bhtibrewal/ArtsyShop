import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import {
  CartPage,
  HomePage,
  ProductPage,
  SignIn,
  SignUp,
  WishlistPage,
} from "./pages";
import MockAPI from "./backend/Mockman";
import { ProductFilterProvider } from "./context/ProductsFilterContext";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={
            <ProductFilterProvider>
              <ProductPage />
            </ProductFilterProvider>
          }
        />
        <Route path="/wishlist" element={<WishlistPage />} />  
        <Route path="/cart" element={<CartPage />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
