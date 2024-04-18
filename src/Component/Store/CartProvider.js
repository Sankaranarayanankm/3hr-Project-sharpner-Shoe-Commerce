import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultReducer = {
  items: [],
  totalAmount: 0,
};
const reducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItems = state.items.concat(action.item);
   
    const updatedTotalAmount =
      state.totalAmount +
      action.item.price * action.item.largeQty +
      action.item.price * action.item.mediumQty +
      action.item.price * action.item.smallQty;
      console.log(state.totalAmount);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultReducer);
  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const defaultContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={defaultContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
