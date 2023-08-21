import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart">
      <Link to="/">
        <p className="back">{"<-----"}Back to homepage</p>
      </Link>
      <h2>Cart page goes here</h2>
    </div>
  );
};

export default Cart;
