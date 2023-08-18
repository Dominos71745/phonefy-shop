import BrandList from "./BrandList";
import PhoneItem from "./PhoneItem";
import iphone13 from "./images/iphone_13.png";
import iphone14Pro from "./images/iphone_14.jpg";
import iphoneSE from "./images/iphone_se.jpg";

const PhoneList = () => {
  const colorArray = ["#FF5733", "#0074D9", "#2ECC40", "#FFDC00"];

  const [color, setColor] = colorArray;

  const showColorHandler = () => {
    setColor(colorArray);
  };

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
        storage="125GB"
        colorName={colorArray[0]}
        // colorName2={colorArray[1]}
        // colorName3={colorArray[2]}
        // colorName4={colorArray[3]}
      />
      <PhoneItem name="Iphone 13" image={iphone13} width={320} price="$699" />
      <PhoneItem
        name="Iphone 14 Pro"
        image={iphoneSE}
        width={380}
        price="$429"
      />
    </div>
  );
};

export default PhoneList;
