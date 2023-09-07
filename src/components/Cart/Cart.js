import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";
import Button from "../UI/Button";

const Cart = (props) => {
  const { cartItems, calculateTotal } = useCart();
  console.log(cartItems);

  const cartItemsJSX = (
    <ul>
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          name={item.name}
          image={item.image}
          price={item.price}
          colors={item.colors}
          storage={item.storage}
          quantity={item.amount}
        />
      ))}
    </ul>
  );

  return (
    <div>
      {props.showCart && (
        <Modal onClose={props.onHideCart}>
          {cartItemsJSX}
          <div className="text-xl mt-3">
            <span>Total amount of the cart:</span>
            <span className="ml-1 font-bold">${calculateTotal()} </span>
          </div>
          <div className="flex float-right gap-2">
            <Button color="orange" onClick={props.onHideCart}>
              Close
            </Button>
            <Button color="yellow">Order</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
