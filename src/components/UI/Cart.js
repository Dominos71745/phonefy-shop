import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { width, height } = props;

  const cartStyle = {
    width: width,
    height: height,
  };

  return (
    <div className="cart" style={cartStyle}>
      {props.children}
    </div>
  );
};

export default Cart;
