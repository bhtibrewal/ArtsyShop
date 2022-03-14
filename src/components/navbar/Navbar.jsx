import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <header className="arstyShop-header header">
      <Link to="/">{props.leftNav}</Link>
      {props.search}
      {props.rightNav}
    </header>
  );
};
