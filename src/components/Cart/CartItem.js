const CartItem = (props) => {
  return (
    <li>
      <div>
        <p>{props.name}</p>
        <img src={props.image} alt={props.name} width={200} />
        <p>${props.price}</p>
        <p>Color: {props.colors.name}</p>
        <p>{props.storage}</p>
      </div>
    </li>
  );
};

export default CartItem;
