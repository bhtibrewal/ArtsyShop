import "./navbar.css";
import { LeftNav, RightNav} from "./components";

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
