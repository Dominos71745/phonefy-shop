import React from "react";
import Modal from "../UI/Modal";
import {
  removeFromCart,
  addQuantity,
  subtractQuantity,
  emptyCart,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.phones || []);

  const totalAmount = cartItems.reduce((total, phone) => {
    return total + phone.quantity * phone.price;
  }, 0);

  const handleAddQuantity = (id) => {
    dispatch(addQuantity(id));
  };

  const handleSubtractQuantity = (id) => {
    dispatch(subtractQuantity(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div>
      {props.showCart && (
        <Modal onClose={props.onHideCart}>
          <div className="text-xl mt-3">
            <span>Total amount of the cart:</span>
            <span className="ml-1 font-bold">{totalAmount}</span>
          </div>
          <div>
            {cartItems.map((phone) => (
              <div key={phone.id}>
                <p>{phone.name}</p>
                <p>Quantity: {phone.quantity}</p>
                <p>Price: {phone.price}</p>
                <Button onClick={() => handleRemoveFromCart(phone.id)}>
                  Remove
                </Button>
                <Button onClick={() => handleSubtractQuantity(phone.id)}>
                  -
                </Button>
                <Button onClick={() => handleAddQuantity(phone.id)}>+</Button>
              </div>
            ))}
          </div>
          <div className="flex float-right gap-2">
            <Button color="orange" onClick={props.onHideCart}>
              Close
            </Button>
            <Button color="yellow" onClick={handleEmptyCart}>
              Empty Cart
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
