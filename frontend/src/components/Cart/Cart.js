import React from "react";
import Modal from "../UI/Modal";
import { cartReducers } from "../../../store/reducer";
import Button from "../UI/Button";

const Cart = (props) => {
  return (
    <div>
      {props.showCart && (
        <Modal onClose={props.onHideCart}>
          <div className="text-xl mt-3">
            <span>Total amount of the cart:</span>
            <span className="ml-1 font-bold"></span>
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
