import classes from "./CartButton.module.css";
import { useState } from "react";

const CartButton = (props) => {
  const [btnIsHighLighted, setbtnIsHighLighted] = useState(false);

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  return (
    <div className="flex items-center">
      <button className={btnClasses} onClick={props.onClick}>
        Cart
      </button>
      <span className={classes.badge}></span>
    </div>
  );
};

export default CartButton;
