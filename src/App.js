import React, { useState } from "react";
import NavBar from "./components/Navbar";
import PhoneList from "./components/PhoneList";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <NavBar onShowCart={showCartHandler} />
      <PhoneList />
      <Cart showCart={cartIsShown} onHideCart={hideCartHandler} />
    </CartProvider>
  );
}

export default App;
