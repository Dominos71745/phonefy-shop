import Button from "./UI/Button";

const PhoneItem = ({ name, image, price, width }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <p>{name}</p>
      <img width={width} src={image} alt={name} />
      <p>{price}</p>
      <Button>Add to cart</Button>
    </div>
  );
};

export default PhoneItem;
