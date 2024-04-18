import React, { useContext } from "react";
import CartContext from "../Store/cart-context";

const ItemList = () => {
  const cartCtx = useContext(CartContext);
  // add onclick event to 3 buttons and make 3 separate handlers then add remove handler in context 
  const itemList = cartCtx.items.map((item) => (
    <li key={item.id}>
      {item.name} {item.desc} {item.price}
      <button>Large {item.largeQty > 0 ? item.largeQty : 0}</button>
      <button>Medium {item.mediumQty > 0 ? item.mediumQty : 0} </button>
      <button>Small {item.smallQty > 0 ? item.smallQty : 0} </button>
    </li>
  ));
  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
};

export default ItemList;
