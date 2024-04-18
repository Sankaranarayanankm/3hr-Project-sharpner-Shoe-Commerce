import React, { useState } from "react";
import Header from "./Component/Header/Header";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Component/Store/CartProvider";
import ItemList from "./Component/Layout/ItemList";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      <Header onclick={showCartHandler} />
      <main>
        <ItemList />
      </main>
      {showCart && <Cart onclick={hideCartHandler} />}
    </CartProvider>
  );
};

export default App;
