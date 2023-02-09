import { Link } from "react-router-dom";
import { FadedSmallText } from "../core/Text";

interface ConsultCircleProps {
  name: string;
  icon: string;
  href: string;
}

const ConsultCircle = ({ name, icon, href }: ConsultCircleProps) => {
  return (
    <Link to={href}>
      <div className="flex flex-col items-center">
        <div className="rounded-full border border-gray-300 p-2.5 drop-shadow-md bg-white">
          <img src={icon} width={25} height={25} alt="myhc" />
        </div>
        <FadedSmallText classes={"text-center mt-2"}>{name}</FadedSmallText>
      </div>
    </Link>
  );
};

export default ConsultCircle;
