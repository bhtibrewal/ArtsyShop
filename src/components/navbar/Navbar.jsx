import "./navbar.css";
import { LeftNav, RightNav, Search } from "./components";

export const Navbar = () => {
  return (
    <header className="arstyShop-header header">
      <div className="flex-align-center">
        <LeftNav />
        <RightNav />
      </div>
    </header>
  );
};
