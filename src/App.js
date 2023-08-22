import React, { useState } from "react";
import NavBar from "./components/UI/Navbar";
import PhoneList from "./components/Phone/PhoneList";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Cart/CartContext";

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
