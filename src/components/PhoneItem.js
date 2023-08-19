import Button from "./UI/Button";
import "./PhoneItem.css";
import Cart from "./UI/CartUI";
import ColorMapper from "./ColorMapper";

const PhoneItem = (props) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <img width={props.width} src={props.image} alt={props.name} />
      <div className="flex flex-col justify-start gap-4 ml-10">
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
        <ColorMapper colors={props.colors} />
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
