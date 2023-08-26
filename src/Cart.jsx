// import { Link } from "react-router-dom";

const Cart = ({ items, clearCart }) => {
  const cartElements = items.map((i, index) => (
    <div className="cart-item" key={index}>
      <img src={i.image} />
      <h3>{i.title}</h3>
      <p>{i.price}</p>
    </div>
  ));
  return (
    <div className="cart">
      <h2>Cart page goes here</h2>
      {cartElements}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
