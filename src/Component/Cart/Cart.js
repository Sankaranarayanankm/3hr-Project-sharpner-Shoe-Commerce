import React, { useContext } from "react";
import Model from "../Model/Model";
import CartContext from "../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const cartList = cartCtx.items.map((item) => (
    <li key={item.id}>
      {item.name} L{item.L} S{item.S} -{item.price}
    </li>
  ));
  return (
    <Model onclick={props.onclick}>
      {cartList}
      <div>
        <span>Total Amount</span>
        <span> {totalAmount} </span>
      </div>
      <div>
        <button>Place Order</button>
        <button onClick={props.onclick}>Cancel</button>
      </div>
    </Model>
  );
};

export default Cart;
