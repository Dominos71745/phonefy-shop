import BrandList from "../Misc/BrandList";
import PhoneItem from "./PhoneItem";
import iphone13 from "../../assets/iphone_13.png";
import iphone14Pro from "../../assets/iphone_14.jpg";
import iphoneSE from "../../assets/iphone_se.jpg";
import { useCart } from "../Cart/CartContext";
import NavBar from "../UI/Navbar";
import { useState } from "react";
import Cart from "../Cart/Cart";

const PhoneList = () => {
  const { cartItems, setCartItems } = useCart([]);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [inputText, setInputText] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

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

  const phoneItems = [
    {
      name: "Iphone 14 Pro",
      brand: "Apple",
      image: iphone14Pro,
      price: "999",
      description: "6.1-inch display",
      leasing: "or $41.62/mo",
      storage: "128GB",
      colors: colorArray,
    },
    {
      name: "Iphone 13",
      brand: "Apple",
      image: iphone13,
      price: "699",
      description: "6.1-inch display",
      leasing: "or $29.12/mo",
      storage: "128GB",
      colors: colorArray1,
    },
    {
      name: "Iphone SE",
      brand: "Apple",
      image: iphoneSE,
      price: "429",
      description: "4.7-inch display",
      leasing: "or $17.87/mo",
      storage: "64GB",
      colors: colorArray2,
    },
    {
      name: "Iphone SE",
      brand: "Samsung",
      image: iphoneSE,
      price: "429",
      description: "4.7-inch display",
      leasing: "or $17.87/mo",
      storage: "64GB",
      colors: colorArray2,
    },
    {
      name: "Iphone SE",
      brand: "Oppo",
      image: iphoneSE,
      price: "429",
      description: "4.7-inch display",
      leasing: "or $17.87/mo",
      storage: "64GB",
      colors: colorArray2,
    },
  ];

  const filteredPhoneItems = phoneItems
    .filter((phoneItem) =>
      phoneItem.name.toLowerCase().includes(inputText.toLowerCase())
    )
    .filter((phoneItem) =>
      selectedBrand
        ? phoneItem.brand.toLowerCase() === selectedBrand.toLowerCase()
        : true
    );

  return (
    <div className="flex flex-col">
      <NavBar onShowCart={showCartHandler} onSearchInputChange={setInputText} />
      <BrandList
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
      />
      {filteredPhoneItems.map((phoneItem) => (
        <PhoneItem
          key={phoneItem.name}
          name={phoneItem.name}
          image={phoneItem.image}
          price={phoneItem.price}
          width={400}
          description={phoneItem.description}
          leasing={phoneItem.leasing}
          storage={phoneItem.storage}
          colors={phoneItem.colors}
          setCart={addToCartHandler}
        />
      ))}
      <Cart showCart={cartIsShown} onHideCart={hideCartHandler} />
    </div>
  );
};

export default PhoneList;
