import Button from "../UI/Button";
import "./PhoneItem.css";
import Cart from "../UI/CartUI";
import ColorMapper from "../Misc/ColorMapper";
import { useCart } from "../Cart/CartContext";
import { useState } from "react";

const PhoneItem = ({
  name,
  price,
  storage,
  description,
  colors,
  leasing,
  width,
  image,
}) => {
  const [selectedColor, setSelectedColor] = useState("");
  const { setCartItems } = useCart();
  console.log(selectedColor);

  const selectedColorHandler = (color) => {
    setSelectedColor(color);
  };

  const addToCart = () => {
    const newItem = {
      name,
      image,
      price,
      storage,
      colors: selectedColor,
      amount: 1,
    };

    setCartItems((prevItems) => [...prevItems, newItem]);
  };
  return (
    <div className="flex items-center justify-center mt-4">
      <img width={width} src={image} alt={name} />
      <div className="flex flex-col justify-start gap-4 ml-10">
        <Cart width="300px" height="80px">
          <span>
            <p>{name}</p>
            <p>{description}</p>
          </span>
          <span>
            <p>${price}</p>
            <p>{leasing}</p>
          </span>
        </Cart>
        <p>Pick your finish</p>
        <p>Color - {selectedColor.name}</p>
        <ColorMapper colors={colors} onSelectColor={selectedColorHandler} />
        <p>Storage</p>
        <div className="flex gap-2">
          <Cart width="150px" height="60px">
            <p>{storage}</p>
          </Cart>
          <Cart width="150px" height="60px">
            <Button onClick={addToCart}>Add to cart</Button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default PhoneItem;
