import React, { useContext } from "react";
import HeaderForm from "./HeaderForm";
import CartContext from "../Store/cart-context";

const Header = (props) => {
  const cartCtx=useContext(CartContext);
  const items=cartCtx.cartItems.reduce((curr,item)=>{
    return curr+item.largeQty+item.mediumQty+item.smallQty
  },0);
  
  return (
    <header>
      <button onClick={props.onclick}>
        <span>Cart</span>
        <span> {items}</span>
      </button>
      <HeaderForm />
    </header>
  );
};

export default Header;
