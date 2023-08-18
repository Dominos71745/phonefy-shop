import BrandList from "./BrandList";
import PhoneItem from "./PhoneItem";
import iphone13 from "./images/iphone_13.png";
import iphone14Pro from "./images/iphone_14.jpg";
import iphoneSE from "./images/iphone_se.jpg";

const PhoneList = () => {
  const colorArray = ["#FF5733", "#0074D9", "#2ECC40", "#FFDC00"];
  const colorArray1 = ["#2ECC40", "#FFDC00"];
  const colorArray2 = ["#FF5733", "#0074D9", "#2ECC40"];

  return (
    <div className="flex flex-col">
      <BrandList />
      <PhoneItem
        name="Iphone 14 Pro"
        image={iphone14Pro}
        width={300}
        price="$999"
        description="6.1-inch display"
        leasing="or $41.62/mo"
        storage="128GB"
        colors={colorArray}
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
      />
      <PhoneItem
        name="Iphone SE"
        image={iphoneSE}
        width={380}
        price="$429"
        description="4.7-inch display"
        leasing="or $17.87/mo"
        storage="64GB"
        colors={colorArray2}
      />
    </div>
  );
};

export default PhoneList;
