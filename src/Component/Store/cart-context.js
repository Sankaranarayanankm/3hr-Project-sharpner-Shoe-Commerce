import React, { createContext } from "react";

const CartContext = createContext({
  items: [],
  cartItems:[],
  totalAmount: 0,
  addItem: () => {},
  addItemToCart:()=>{},
  placeOrder:()=>{}
});

export default CartContext;
