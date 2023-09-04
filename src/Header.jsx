import { Link, Outlet } from "react-router-dom";

const Header = ({ num }) => {
  return (
    <>
      <nav className="header">
        <Link to="/">
          <h1 className="logo">Shopping Now!</h1>
        </Link>

        <div className="nav">
          <Link to="/">
            <p className="header-link">Home</p>
          </Link>
          <Link to="products">
            <p className="header-link">Products</p>
          </Link>
          <Link to="cart">
            <p className="header-link">
              Cart<span>{num ? `(${num})` : ""}</span>
            </p>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
