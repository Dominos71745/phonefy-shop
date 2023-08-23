import { useCart } from "./CartContext";
import classes from "./CartButton.module.css";
import { useEffect, useState } from "react";

const CartButton = (props) => {
  const { cartItems } = useCart();
  const [btnIsHighLighted, setbtnIsHighLighted] = useState(false);

  const numberOfCartItems = cartItems.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setbtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setbtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <div className="flex items-center">
      <button className={btnClasses} onClick={props.onClick}>
        Cart
      </button>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </div>
  );
};

export default CartButton;
