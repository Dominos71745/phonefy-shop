import React from "react";
import Modal from "./UI/Modal";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";

const Cart = (props) => {
  const { cartItems } = useCart();

  const cartitems = (
    <ul>
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          name={item.name}
          price={item.price}
          storage={item.storage}
        />
      ))}
    </ul>
  );

  return (
    <div>
      {props.showCart && <Modal onClose={props.onHideCart}>{cartitems}</Modal>}
    </div>
  );
};

export default Cart;
