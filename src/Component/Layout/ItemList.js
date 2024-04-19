import React, { useContext } from "react";
import CartContext from "../Store/cart-context";

const ItemList = () => {
  const cartCtx = useContext(CartContext);
// large item add Handler 
  const addLargeItemToCartHandler = (id) => {
    const itemIndex = cartCtx.items.findIndex((item) => item.id === id);
    const item = { ...cartCtx.items[itemIndex] };
    if(item.largeQty==0) return;
    item.largeQty = item.largeQty - 1;
    const newItem = {
      ...item,
      largeQty: 1,
      mediumQty: 0,
      smallQty: 0,
    };
    cartCtx.addItem(item);
    cartCtx.addItemToCart(newItem);
    cartCtx.addItem(item)
  };
// medium item add handler 
const addMediumItemToCartHandler=id=>{
  const itemIndex = cartCtx.items.findIndex((item) => item.id === id);
  const item = { ...cartCtx.items[itemIndex] };
  if(item.mediumQty==0) return;
  item.mediumQty = item.mediumQty - 1;
  const newItem = {
    ...item,
    largeQty: 0,
    mediumQty: 1,
    smallQty: 0,
  };
  cartCtx.addItem(item);
  cartCtx.addItemToCart(newItem);
  cartCtx.addItem(item)
}
// adding small items 
const addSmallItemToCartHandler=id=>{
  const itemIndex = cartCtx.items.findIndex((item) => item.id === id);
  const item = { ...cartCtx.items[itemIndex] };
  if(item.smallQty==0) return;
  item.smallQty = item.smallQty - 1;
  const newItem = {
    ...item,
    largeQty: 0,
    mediumQty: 0,
    smallQty: 1,
  };
  cartCtx.addItem(item);
  cartCtx.addItemToCart(newItem);
  cartCtx.addItem(item)
}
  // then create a new array in context to add items to cart when button is clicked
  const itemList = cartCtx.items.map((item) => (
    <li key={item.id}>
      {item.name} {item.desc} {item.price}
      <button onClick={() => addLargeItemToCartHandler(item.id)}>
        Large {item.largeQty > 0 ? item.largeQty : 0}
      </button>
      <button onClick={() => addMediumItemToCartHandler(item.id)}>Medium {item.mediumQty > 0 ? item.mediumQty : 0} </button>
      <button onClick={() => addSmallItemToCartHandler(item.id)}>Small {item.smallQty > 0 ? item.smallQty : 0} </button>
    </li>
  ));
  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
};

export default ItemList;
