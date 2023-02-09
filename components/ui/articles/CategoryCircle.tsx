import { Link } from "react-router-dom";
import { FadedSmallText, SmallText } from "../core/Text";

interface CategoryCircleProps {
  name: string;
  icon: string;
  href: string;
  isActive: boolean;
}

const CategoryCircle = ({
  name,
  icon,
  href,
  isActive,
}: CategoryCircleProps) => {
  return (
    <>
      {isActive ? (
        <Link to={href}>
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-gray-300 p-2.5 drop-shadow-md bg-primary-100">
              <img
                style={{
                  filter:
                    "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%)",
                }}
                src={icon}
                width={25}
                height={25}
                alt="myhc"
              />
            </div>
            <SmallText classes={"text-center mt-2"}>{name}</SmallText>
          </div>
        </Link>
      ) : (
        <Link to={href}>
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-gray-300 p-2.5 drop-shadow-md bg-white">
              <img src={icon} width={25} height={25} alt="myhc" />
            </div>
            <FadedSmallText classes={"text-center mt-2"}>{name}</FadedSmallText>
          </div>
        </Link>
      )}
    </>
  );
};

export default CategoryCircle;
