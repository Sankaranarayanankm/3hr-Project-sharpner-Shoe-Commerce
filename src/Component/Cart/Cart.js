import React, { Component, useContext } from "react";
import Model from "../Model/Model";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const cartList = cartCtx.cartItems.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      largeQty={item.largeQty}
      mediumQty={item.mediumQty}
      smallQty={item.smallQty}
      price={item.price}
    />
  ));
  const placeOrderHandler = () => {
    cartCtx.placeOrder();
    // props.onclick()
  };

  return (
    <Model onclick={props.onclick}>
      <ul>{cartList}</ul>
      <div>
        <span>Total Amount</span>
        <span> {totalAmount} </span>
      </div>
      <div>
        <button onClick={placeOrderHandler}>Place Order</button>
        <button onClick={props.onclick}>Cancel</button>
      </div>
    </Model>
  );
};

export default Cart;
