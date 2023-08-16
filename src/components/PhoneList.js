import PhoneItem from "./PhoneItem";
import iphone13 from "./images/iphone_13.png";
import iphone14Pro from "./images/iphone_14.jpg";
import iphoneSE from "./images/iphone_se.jpg";

const PhoneList = () => {
  return (
    <div className="flex flex-row justify-evenly">
      <PhoneItem
        name="Iphone 14 Pro"
        image={iphone14Pro}
        width={300}
        price="$999"
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
