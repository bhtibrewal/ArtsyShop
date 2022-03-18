import "./navbar.css";
import { LeftNav, RightNav, Search } from "./components";

export const Navbar = (props) => {
  return (
    <header className="arstyShop-header header">
      <LeftNav />
      <Search />
      <RightNav />
    </header>
  );
};
