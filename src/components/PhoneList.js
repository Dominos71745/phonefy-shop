import BrandList from "./BrandList";
import PhoneItem from "./PhoneItem";
import iphone13 from "./images/iphone_13.png";
import iphone14Pro from "./images/iphone_14.jpg";
import iphoneSE from "./images/iphone_se.jpg";

const PhoneList = () => {
  const colorArray = [
    { hex: "#000", name: "Black" },
    // "#494351",
    // "#F3E5CB",
    // "#F3F5F4",
  ];
  const colorArray1 = [
    { hex: "#447792", name: "Blue" },
    // "#447792",
    // "#FBE2DD",
    // "#42474D",
    // "#FBF7F4",
    // "#475846",
    // "#C82333",
  ];
  // const colorArray2 = ["#333941", "#FBF7F4", "#C82333"];

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
      {/* <PhoneItem
        name="Iphone SE"
        image={iphoneSE}
        width={320}
        price="$429"
        description="4.7-inch display"
        leasing="or $17.87/mo"
        storage="64GB"
        colors={colorArray2}
      /> */}
    </div>
  );
};

export default PhoneList;
