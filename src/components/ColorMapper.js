import { useState } from "react";

const ColorMapper = ({ colors }) => {
  const [color, setColor] = useState("");

  const modifiedArray = colors.map((item) => {
    if (item === "#343331") {
      return "Black";
      // } else if (item === "#494351") {
      //   return "Grey";
      // } else if (item === "#F3E5CB") {
      //   return "Yellow";
      // } else if (item === "#F3F5F4") {
      //   return "White";
      // } else if (item === "#2ECC40") {
      //   return "Green";
      // } else if (item === "#FF5733") {
      //   return "Orange";
      // } else if (item === "#0074D9") {
      //   return "Blue";
    } else {
      return item;
    }
  });

  return (
    <div>
      <p>Color - {color}</p>
      <div className="flex gap-2">
        {modifiedArray.map((color) => {
          return (
            <span
              key={color}
              className="dot"
              style={{ backgroundColor: color }}
              onClick={() => setColor(color)}
              onMouseOver={() => setColor(color)}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default ColorMapper;
