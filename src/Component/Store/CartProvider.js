import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultReducer = {
  items: [],
  cartItems: [],
  totalAmount: 0,
};
const reducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItems = state.items.concat(action.item);
    return {
      ...state,
      items: updatedItems,
    };
  } else if (action.type == "ADDTOCART") {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id == action.item.id
    );
    let item = state.cartItems[itemIndex];
    let updatedCartItems;
    if (item) {
      const updatedCartItem = {
        ...item,
        largeQty: item.largeQty + action.item.largeQty,
        mediumQty: item.mediumQty + action.item.mediumQty,
        smallQty: item.smallQty + action.item.smallQty,
      };
      updatedCartItems=[...state.cartItems];
      updatedCartItems[itemIndex]=updatedCartItem;
    } else {
      updatedCartItems = state.cartItems.concat(action.item);
    }

    const updatedItems = state.items.filter(
      (item) => item.id !== action.item.id
    );
    const updatedTotalAmount =
      state.totalAmount +
      action.item.price * action.item.largeQty +
      action.item.price * action.item.mediumQty +
      action.item.price * action.item.smallQty;

    // console.log(updatedCartItems[itemIndex]);
    return {
      items: updatedItems,
      cartItems: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
    
  }
  else if(action.type=="PLACEORDER"){
    return {
      items:state.items,
      cartItems:[],
      totalAmount:0
    }
  }
   else return state;
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultReducer);
  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADDTOCART", item: item });
  };
  const placeOrderHandler=()=>{
    dispatch({type:'PLACEORDER'})
  }
  const defaultContext = {
    items: state.items,
    cartItems: state.cartItems,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    addItemToCart: addItemToCartHandler,
    placeOrder:placeOrderHandler
  };
  return (
    <CartContext.Provider value={defaultContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
