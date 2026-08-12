import React from "react";

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items in Cart: <strong>{cartItems.length}</strong></p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;