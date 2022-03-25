import "./navbar.css";
import { LeftNav, RightNav, Search } from "./components";

export const Navbar = () => {
  return (
    <header className="arstyShop-header header">
      <div className="flex-align-center">
        <LeftNav />
        <Search className="web-search" />
        <RightNav />
      </div>
      <Search className="mobile-search" />
    </header>
  );
};
