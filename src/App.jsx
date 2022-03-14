import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LeftNav, RightNav, Search } from "./components/navbar/components";
import { Navbar } from "./components/navbar/Navbar";
import { CartPage, HomePage, ProductPage, WishlistPage } from "./pages";
import MockAPI from "./backend/Mockman";

function App() {
  return (
    <div className="body">
      <Navbar
        leftNav={<LeftNav />}
        rightNav={<RightNav />}
        search={<Search />}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </div>
  );
}

export default App;
