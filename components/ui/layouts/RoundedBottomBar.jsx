import { RegularText } from "../core/Text";
import { BsCalendarCheck } from "react-icons/bs";
import Floater from "../core/Floater";
import { Link } from "react-router-dom";
const RoundedBottomBar = ({ clickable, text, handleClick, href }) => {
  return (
    <Floater classes="z-50 bg-transparent border-none bottom-4 !px-8 !py-0">
      {clickable && href ? (
        <Link to={href} className="w-full">
          <div
            className={`rounded-lg drop-shadow-lg py-3 px-2 w-full flex items-center justify-center ${
              clickable ? "bg-primary-100" : "bg-gray-300"
            }`}
            onClick={() => {
              handleClick();
            }}
          >
            <BsCalendarCheck size="24px" className="mr-2" color="#fff" />
            <RegularText classes="text-white">{text}</RegularText>
          </div>
        </Link>
      ) : (
        <div
          className={`rounded-lg drop-shadow-lg py-3 px-2 w-full flex items-center justify-center ${
            clickable ? "bg-primary-100" : "bg-gray-300"
          }`}
          onClick={() => {
            handleClick();
          }}
        >
          <BsCalendarCheck size="24px" className="mr-2" color="#fff" />
          <RegularText classes="text-white">{text}</RegularText>
        </div>
      )}
    </Floater>
  );
};

export default RoundedBottomBar;
