import Button from "./UI/Button";
import "./PhoneItem.css";
import Cart from "./UI/Cart";
import { useState } from "react";

const PhoneItem = (props) => {
  const [color, setColor] = useState("");

  return (
    <div className="flex items-center justify-evenly mt-8">
      <img width={props.width} src={props.image} alt={props.name} />
      <div className="flex flex-col justify-start gap-4">
        <Cart width="300px" height="80px">
          <span>
            <p>{props.name}</p>
            <p>{props.description}</p>
          </span>
          <span>
            <p>{props.price}</p>
            <p>{props.leasing}</p>
          </span>
        </Cart>
        <p>Pick your finish</p>
        <p>Color - {color}</p>
        <div className="flex gap-2">
          {props.colors.map((color) => {
            return (
              <span
                className="dot"
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
                onMouseOver={() => setColor(color)}
              ></span>
            );
          })}
        </div>
        <p>Storage</p>
        <div className="flex gap-2">
          <Cart width="150px" height="60px">
            <p>{props.storage}</p>
          </Cart>
          <Cart width="150px" height="60px">
            <Button>Add to cart</Button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default PhoneItem;
