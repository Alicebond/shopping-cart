import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Link to="/">
        <p>{"<-----"}Back to homepage</p>
      </Link>
      <h2>Cart page goes here</h2>
    </div>
  );
};

export default Cart;
