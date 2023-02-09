import { MediumText, FadedSmallText } from "./Text";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

interface AccordionProps {
  classes?: string;
  title?: string;
  content: React.ReactNode;
  handleClick: () => {};
  open?: true | false;
  downArrowClasses?: string;
  rightArrowClasses?: string;
  contentClasses?: string;
}

const Accordion = ({
  classes,
  title,
  content,
  handleClick,
  open,
  downArrowClasses,
  rightArrowClasses,
  contentClasses,
}: AccordionProps) => {
  return (
    <div className={`${classes} border-b border-gray-300 p-2 rounded`}>
      <div
        className="flex justify-between items-center"
        onClick={() => handleClick()}
      >
        <MediumText>{title}</MediumText>
        {open ? (
          <BsChevronDown size="24px" className={downArrowClasses} />
        ) : (
          <BsChevronRight size="20px" className={rightArrowClasses} />
        )}
      </div>
      {open ? (
        <FadedSmallText classes={contentClasses}>{content}</FadedSmallText>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Accordion;
