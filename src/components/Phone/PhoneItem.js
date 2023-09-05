import "./PhoneItem.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ColorMapper from "../Misc/ColorMapper";
import Storage from "../Misc/Storage";
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
  const [selectedStorage, setSelectedStorage] = useState("");
  const { addCartItem } = useCart();
  console.log(selectedStorage);

  const selectedColorHandler = (color) => {
    setSelectedColor(color);
  };

  const selectedStorageHandler = (storage) => {
    setSelectedStorage(storage);
  };

  const addToCart = () => {
    const newItem = {
      name,
      image,
      price,
      storage: selectedStorage,
      colors: selectedColor,
    };

    addCartItem(newItem);
  };
  return (
    <div className="flex items-center justify-center mt-4 font-roboto">
      <img width={width} src={image} alt={name} />
      <div className="flex flex-col justify-start gap-4 ml-10 text-xl">
        <Card width="300px" height="80px">
          <span>
            <p>{name}</p>
            <p className="text-base">{description}</p>
          </span>
          <span>
            <p>${price}</p>
            <p className="text-base">{leasing}</p>
          </span>
        </Card>
        <p>Pick your finish</p>
        <p>Color - {selectedColor.name}</p>
        <ColorMapper colors={colors} onSelectColor={selectedColorHandler} />
        <label htmlFor="storage">Storage:</label>
        <div className="flex gap-2">
          <Storage storage={storage} onSelectStorage={selectedStorageHandler} />
          <Card width="150px" height="60px">
            <Button onClick={addToCart}>Add to cart</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PhoneItem;
