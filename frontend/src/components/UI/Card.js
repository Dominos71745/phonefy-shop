import React from "react";
import "./Card.css";

const Cart = (props) => {
  const { width, height } = props;

  const cartStyle = {
    width: width,
    height: height,
  };

  return (
    <div className="card" style={cartStyle}>
      {props.children}
    </div>
  );
};

export default Cart;
