import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";
import Button from "../UI/Button";

const Cart = (props) => {
  const { cartItems } = useCart();

  const cartitems = (
    <ul>
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          name={item.name}
          image={item.image}
          price={item.price}
          colors={item.colors}
          storage={item.storage}
        />
      ))}
    </ul>
  );

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + parseFloat(item.price),
      0
    );
    return total.toFixed(2);
  };

  return (
    <div>
      {props.showCart && (
        <Modal onClose={props.onHideCart}>
          {cartitems}
          <p>Total amount: ${calculateTotal()} </p>
          <Button onClick={props.onHideCart}>Close</Button>
          <Button>Order</Button>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
