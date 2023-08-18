import Button from "./UI/Button";
import "./PhoneItem.css";
import Cart from "./UI/Cart";
import { useState } from "react";

const PhoneItem = (props) => {
  const [hoveredColorIndex, setHoveredColorIndex] = useState(null);

  const showColorHandler = (index) => {
    setHoveredColorIndex(index);
  };

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
        <div>
          Color -
          {hoveredColorIndex !== null && (
            <p>{props.colorName[hoveredColorIndex]}</p>
          )}
        </div>
        <div className="flex gap-2">
          <span
            className="dot"
            style={{ backgroundColor: props.colorName }}
          ></span>
          {/* <span
            className="dot"
            style={{ backgroundColor: props.colorName2 }}
          ></span>
          <span
            className="dot"
            style={{ backgroundColor: props.colorName3 }}
          ></span>
          <span
            className="dot"
            style={{ backgroundColor: props.colorName4 }}
          ></span> */}
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
