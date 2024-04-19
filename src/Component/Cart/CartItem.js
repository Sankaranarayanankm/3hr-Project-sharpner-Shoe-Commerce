import React from "react";

const CartItem = (props) => {
  const style={display:"flex",gap:'5px'};
  return (
    <li>
      <div style={style}>
        <p>{props.name}- </p>
        {props.largeQty > 0 && <p> L{props.largeQty} </p>}
        {props.mediumQty > 0 && <p> M{props.mediumQty} </p>}
        {props.smallQty > 0 && <p> S{props.smallQty} </p>}
        <p>- {props.price} </p>
      </div>
    </li>
  );
};

export default CartItem;
