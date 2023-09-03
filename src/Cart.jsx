// import { Link } from "react-router-dom";

const Cart = ({ items, clearCart, removeItem }) => {
  const cartElements = items.map((i, index) => (
    <div className="cart-style cart-item" key={index}>
      <div className="cart-style cart-left">
        <img className="cart-image" src={i.image} />
        <h3>{i.title}</h3>
      </div>
      <div className="cart-style cart-right">
        <p className="item-price">${i.price} CAD</p>
        <button className="btn" onClick={() => removeItem(i.uid)}>
          Remove
        </button>
      </div>
    </div>
  ));
  return (
    <div className="cart">
      <h3 className="cart-title">Shopping Cart</h3>
      <div className="cart-style cart-header">
        <span className="cart-style cart-left item-name">Item</span>
        <div className="cart-style cart-right">
          <span className="item-price">Total</span>
          <button className="btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
      <div>{cartElements}</div>
      <div className="cart-style cart-total">
        <div>
          <div className="left">Subtotal:</div>
          <div>{"Tax(15%):"}</div>
          <div>Total:</div>
        </div>
        <div className="right">
          <div>$1000.00 CAD</div>
          <div>$150.00 CAD</div>
          <div>$1150.00 CAD</div>
        </div>
      </div>
      <div className="checkout">
        <button className="btn checkout-btn bold">Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
