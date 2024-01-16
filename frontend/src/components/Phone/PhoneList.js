import BrandList from "../Misc/BrandList";
import PhoneItem from "./PhoneItem";
import iphone13 from "../../assets/iphone_13.png";
import iphone14Pro from "../../assets/iphone_14.jpg";
import iphoneSE from "../../assets/iphone_se.jpg";
import NavBar from "../UI/Navbar";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { addToCart } from "../../store/actions";
import {
  colorArray,
  colorArray1,
  colorArray2,
  storage,
} from "../data/constans";
import { useDispatch } from "react-redux";

const PhoneList = () => {
  const dispatch = useDispatch();
  const [cartIsShown, setCartIsShown] = useState(false);
  const [inputText, setInputText] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };

  const phoneItems = [
    {
      name: "Iphone 14 Pro",
      brand: "Apple",
      image: iphone14Pro,
      price: "999",
      description: "6.1-inch display",
      leasing: "or $41.62/mo",
      storage: storage,
      colors: colorArray,
    },
    {
      name: "Iphone 13",
      brand: "Apple",
      image: iphone13,
      price: "699",
      description: "6.1-inch display",
      leasing: "or $29.12/mo",
      storage: storage,
      colors: colorArray1,
    },
    {
      name: "Iphone SE",
      brand: "Apple",
      image: iphoneSE,
      price: "429",
      description: "4.7-inch display",
      leasing: "or $17.87/mo",
      storage: storage,
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
