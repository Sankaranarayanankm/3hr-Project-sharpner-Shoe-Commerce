import React, { useContext, useState } from "react";
import CartContext from "../Store/cart-context";
import {v4 as uuid} from "uuid";
const HeaderForm = () => {
  const [name,setName]=useState("");
  const [desc,setDesc]=useState("");
  const [price,setPrice]=useState("");
  const [largeQty,setLargeQty]=useState("");
  const [mediumQty,setMediumQty]=useState("");
  const [smallQty,setSmallQty]=useState("");
  const cartCtx=useContext(CartContext);

  const nameChangeHandler=event=>{
    setName(event.target.value);
  }
  const descChangeHandler=event=>{
    setDesc(event.target.value);
  }
  const priceChangeHandler=event=>{
    setPrice(event.target.value);
  }
  const largeQtyChangeHandler=event=>{
    setLargeQty(event.target.value);
  }
  const mediumQtyChangeHandler=event=>{
    setMediumQty(event.target.value);
  }
  const smallQtyChangeHandler=event=>{
    setSmallQty(event.target.value);
  }
  const submitHandler=event=>{
    event.preventDefault();
    const item={
      id:uuid(),
      name,desc,price,largeQty,mediumQty,smallQty
    }
    // pass the item to the add context 
    cartCtx.addItem(item);
    

  }
  return (
    <form onSubmit={submitHandler}>
      <label>Shoe Name:</label>
      <input type="text" value={name} onChange={nameChangeHandler} />
      <label>Description</label>
      <input type="text" value={desc} onChange={descChangeHandler} />
      <label>Price</label>
      <input type="number" value={price} onChange={priceChangeHandler} />
      <div>
        <label>Quanity Available </label>

        <label>Large:</label>
        <input type="number" value={largeQty} onChange={largeQtyChangeHandler}/>

        <label>Medium:</label>
        <input type="number" value={mediumQty} onChange={mediumQtyChangeHandler} />

        <label>Small:</label>
        <input type="number" value={smallQty} onChange={smallQtyChangeHandler}/>
      </div>

      <button>Add Product</button>
    </form>
  );
};

export default HeaderForm;
