import { useState } from "react";

const ColorMapper = ({ colors }) => {
  const [color, setColor] = useState({});
  console.log(color);

  return (
    <div>
      <p>Color - {color.name}</p>
      <div className="flex gap-2">
        {colors.map((color, index) => {
          return (
            <span
              key={index}
              className="dot"
              style={{ backgroundColor: color.hex }}
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
