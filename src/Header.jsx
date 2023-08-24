import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="header">
        <Link to="/">
          <h1>Shopping Now!</h1>
        </Link>

        <div className="nav">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="products">
            <p>Products</p>
          </Link>
          <Link to="cart">
            <p>
              Cart<span></span>
            </p>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
