import React from "react";
import { useCart } from "./CartContext";
import Button from "../UI/Button";

const CartItem = (props) => {
  const { addQuantity, removeQuantity } = useCart();

  return (
    <li>
      <div className="flex gap-3 text-2xl mt-5">
        <img src={props.image} alt={props.name} width={100} />
        <div className="flex flex-col flex-grow">
          <span className="font-bold">{props.name}</span>
          <div className="flex gap-4">
            <span>Price: ${props.price}</span>
            <span className="border border-solid border-black text-base font-bold p-1">
              x {props.quantity}
            </span>
          </div>
          <span>Color: {props.colors.name}</span>
          <span>Storage: {props.storage}</span>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            color="red"
            onClick={() => removeQuantity(props.name, props.colors.name)}
          >
            -
          </Button>
          <Button
            color="green"
            onClick={() => addQuantity(props.name, props.colors.name)}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
