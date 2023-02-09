import { BsFillCheckCircleFill, BsCircle } from "react-icons/bs";

interface SelectorProps {
  selected?: true | false;
  children: React.ReactNode;
  handleSelection: () => {};
  selectable?: true | false;
  classes?: string;
}

const Selector = ({
  selected,
  children,
  handleSelection,
  selectable,
  classes,
}: SelectorProps) => {
  return (
    <div
      className={`${
        selectable
          ? selected
            ? "border-secondary-100"
            : "border-gray-200"
          : ""
      } bg-white border-2 text-base flex justify-between w-6/10 lg:w-4/5 items-center shadow-md px-4 py-3 my-2 rounded-md mt-3 ${classes}`}
      onClick={handleSelection}
    >
      <div>{children}</div>
      <div>
        {selectable ? (
          selected ? (
            <BsFillCheckCircleFill size="16px" color="#91C9E3" />
          ) : (
            <BsCircle size="16px" />
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Selector;
