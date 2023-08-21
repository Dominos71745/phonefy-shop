import Modal from "./UI/Modal";

const Cart = (props) => {
  console.log(props.cartItems);

  return (
    <div>
      {props.showCart && (
        <Modal onClose={props.onHideCart}>
          {props.cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.storage}</p>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
};

export default Cart;
