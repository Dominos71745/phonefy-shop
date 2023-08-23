import React from "react";
import PhoneList from "./components/Phone/PhoneList";
import { CartProvider } from "./components/Cart/CartContext";

function App() {
  return (
    <CartProvider>
      <PhoneList />
    </CartProvider>
  );
}

export default App;
