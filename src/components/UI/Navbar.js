import CartButton from "../Cart/CartButton";
import SearchBar from "./SearchBar";
import { useState } from "react";

const NavBar = (props) => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    props.onSearchInputChange(lowerCase);
  };

  return (
    <div className="flex justify-evenly items-center bg-black text-white h-16">
      <h1 className="text-3xl">Phonefy</h1>
      <SearchBar onChange={inputHandler} value={inputText} />
      <CartButton onClick={props.onShowCart} />
    </div>
  );
};

export default NavBar;
