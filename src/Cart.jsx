// import { useState } from "react";

const taxRate = 0.15;
function fixedNumber(x) {
  return (Math.round(x * 100) / 100).toFixed(2);
}

const Cart = ({ items, clearCart, removeItem, subtotal }) => {
  const cartElements = items.map((i, index) => {
    return (
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
    );
  });

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
          <div>{`Tax(${taxRate * 100}%):`}</div>
          <div>Total:</div>
        </div>
        <div className="right">
          <div>${fixedNumber(subtotal)} CAD</div>
          <div>${fixedNumber(taxRate * subtotal)} CAD</div>
          <div>${fixedNumber(subtotal * (1 + taxRate))} CAD</div>
        </div>
      </div>
      <div className="checkout">
        <button className="btn checkout-btn bold">Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
