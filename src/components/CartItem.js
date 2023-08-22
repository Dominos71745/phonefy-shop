const CartItem = (props) => {
  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <span>{props.price}</span>
        <span>{props.storage}</span>
      </div>
    </li>
  );
};

export default CartItem;
