import { Link } from "react-router-dom";
import { FadedMediumText } from "../core/Text";

interface SpecialityProps {
  name: string;
  icon: string;
  href: string;
}

const Speciality = ({ name, icon, href }: SpecialityProps) => {
  return (
    <Link to={href}>
      <div className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg h-full">
        <img src={icon} width={40} height={40} alt="myhc" />
        <FadedMediumText classes={"text-center mt-4"}>{name}</FadedMediumText>
      </div>
    </Link>
  );
};

export default Speciality;
