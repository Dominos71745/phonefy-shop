import React from "react";
import Modal from "./UI/Modal";

const Cart = (props) => {
  console.log("What is inside cartItems:", props.cartItems); // Add this line to log the cart items

  return (
    <div>
      {props.showCart && (
        <Modal onClose={props.onHideCart}>
          {props.cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.storage}</p>
              <p>Color: {item.color}</p>
              <p>Description: {item.description}</p>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
};

export default Cart;
