import BrandList from "./BrandList";
import PhoneItem from "./PhoneItem";
import iphone13 from "./images/iphone_13.png";
import iphone14Pro from "./images/iphone_14.jpg";
import iphoneSE from "./images/iphone_se.jpg";
import { useCart } from "./CartContext";

const PhoneList = () => {
  const { cartItems, setCartItems } = useCart();

  const colorArray = [
    { hex: "#61586B", name: "Midnight Purple" },
    { hex: "#F4E8CE", name: "Gold" },
    { hex: "#F1F3F2", name: "Silver" },
    { hex: "#4D4C4A", name: "Space Black" },
  ];
  const colorArray1 = [
    { hex: "#447792", name: "Blue" },
    { hex: "#FBE2DD", name: "Pink" },
    { hex: "#42474D", name: "Midnight" },
    { hex: "#FBF7F4", name: "Starlight" },
    { hex: "#465745", name: "Green" },
    { hex: "#C82233", name: "Red" },
  ];
  const colorArray2 = [
    { hex: "#42474D", name: "Midnight" },
    { hex: "#FBF7F4", name: "Starlight" },
    { hex: "#C82233", name: "Red" },
  ];

  const addToCartHandler = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="flex flex-col">
      <BrandList />
      <PhoneItem
        name="Iphone 14 Pro"
        image={iphone14Pro}
        price="$999"
        description="6.1-inch display"
        leasing="or $41.62/mo"
        storage="128GB"
        colors={colorArray}
        setCart={addToCartHandler}
      />
      <PhoneItem
        name="Iphone 13"
        image={iphone13}
        width={320}
        price="$699"
        description="6.1-inch display"
        leasing="or $29.12/mo"
        storage="128GB"
        colors={colorArray1}
        setCart={addToCartHandler}
      />
      <PhoneItem
        name="Iphone SE"
        image={iphoneSE}
        width={320}
        price="$429"
        description="4.7-inch display"
        leasing="or $17.87/mo"
        storage="64GB"
        colors={colorArray2}
        setCart={addToCartHandler}
      />
    </div>
  );
};

export default PhoneList;
