import { Link } from "react-router-dom";
import { FadedSmallText, SmallText } from "../core/Text";

interface MenuItemProps {
  name: string;
  link: string;
  img_name?: string;
  selected?: true | false;
}

const MenuItem = ({ name, link, img_name, selected }: MenuItemProps) => {
  return (
    <Link to={link}>
      <div className={"relative flex flex-col items-center pt-2 px-6"}>
        <div
          className={`h-0.5 w-full absolute -top-[1px] ${
            selected ? "bg-primary-100" : ""
          }`}
        >
          {""}
        </div>
        <img
          src={`/icons/${img_name}${selected ? ".png" : "_black.png"}`}
          alt="myhc"
          height={25}
          width={25}
        />
        {selected ? (
          <SmallText classes={`mt-1 ${selected ? "text-primary-100" : ""}`}>
            {name}
          </SmallText>
        ) : (
          <FadedSmallText classes={"mt-1"}>{name}</FadedSmallText>
        )}
      </div>
    </Link>
  );
};

export default MenuItem;
