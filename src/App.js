import React, { useState } from "react";
import NavBar from "./components/Navbar";
import PhoneList from "./components/PhoneList";
import Cart from "./components/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      <NavBar onShowCart={showCartHandler} />
      <PhoneList />
      <Cart
        cartItems={[]}
        showCart={cartIsShown}
        onHideCart={hideCartHandler}
      />
    </React.Fragment>
  );
}

export default App;
