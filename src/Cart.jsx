// import { Link } from "react-router-dom";

const Cart = ({ items, clearCart, removeItem }) => {
  const cartElements = items.map((i, index) => (
    <div className="cart-item" key={index}>
      <img src={i.image} />
      <h3>{i.title}</h3>
      <p>{i.price}</p>
      <button onClick={() => removeItem(i.uid)}>Remove</button>
    </div>
  ));
  return (
    <div className="cart">
      <h3 className="cart-title">Shopping Cart</h3>
      {cartElements}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
