import { FadedMediumText, MediumText } from "./Text";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

interface FilterProps {
  filters: [];
  handleFilterClick: (a: string) => {};
  selected: string;
}

const Filter = ({ filters, handleFilterClick, selected }: FilterProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div>
      <div
        className="relative flex items-center py-1 px-4 border border-gray-300 rounded-xl w-auto mr-2"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <FadedMediumText classes={"mr-2"}>{selected}</FadedMediumText>
        <FadedMediumText>
          <IoIosArrowDown />
        </FadedMediumText>
      </div>
      {dropdownOpen ? (
        <div className="absolute bg-white z-50 border border-gray-300 px-4 py-2 rounded">
          {filters.map((filter, idx) => (
            <div
              key={idx}
              onClick={() => {
                setDropdownOpen(false);
                handleFilterClick(filter);
              }}
            >
              <FadedMediumText>{filter}</FadedMediumText>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Filter;
