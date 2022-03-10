import "./navbar.css";

export const Navbar = (props) => {
  return (
    <header className="arstyShop-header header">
      {props.leftNav}
      {props.search}
      {props.rightNav}
    </header>
  );
};
  