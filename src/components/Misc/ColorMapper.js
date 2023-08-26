const ColorMapper = ({ colors, onSelectColor }) => {
  const colorClickerHandler = (event) => {
    const selectedColorIndex = event.target.getAttribute("data-color-index");
    const selectedColor = colors[selectedColorIndex];
    onSelectColor(selectedColor);
  };

  return (
    <div>
      <div className="flex gap-2">
        {colors.map((color, index) => {
          return (
            <span
              key={index}
              className="dot"
              style={{ backgroundColor: color.hex }}
              onClick={colorClickerHandler}
              data-color-index={index} // Add data attribute to store the index
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default ColorMapper;
