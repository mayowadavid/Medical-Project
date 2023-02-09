import { MediumText, SmallText } from "../core/Text";
import { Dispatch, SetStateAction } from "react";
import { BsChevronDown } from "react-icons/bs";

interface EditSelectInfoFieldProps {
  label: string;
  value: string | number;
  method: Dispatch<SetStateAction<string | number>>;
  name: string;
  options: string[] | number[];
  dropdownMenuOpen: boolean;
  setDropdownMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const EditSelectInfoField = ({
  label,
  value,
  method,
  name,
  options,
  dropdownMenuOpen,
  setDropdownMenuOpen,
}: EditSelectInfoFieldProps) => {
  return (
    <div className="relative border-b p-2 border-slate-300">
      <div className="flex flex-col items-start justify-center mb-1">
        <MediumText classes="font-general text-slate-700">{label}</MediumText>
      </div>
      <div
        className="bg-secondary-5 flex items-center justify-between w-full rounded-md px-2 py-2.5"
        onClick={() => setDropdownMenuOpen((prev) => !prev)}
      >
        <MediumText classes="font-title text-slate-700">{value}</MediumText>
        <BsChevronDown
          className={`transition-transform duration-200 ${
            dropdownMenuOpen && "-rotate-180"
          }`}
        />
      </div>
      {dropdownMenuOpen && (
        <div className="mt-2 flex flex-col z-10 absolute bg-slate-200 w-11/12 p-2 rounded-lg border border-slate-400 max-h-80 overflow-y-scroll">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="mb-1 w-full last:mb-0"
              onClick={() => {
                method(option);
                setDropdownMenuOpen(false);
              }}
            >
              <MediumText classes="font-title text-slate-700">
                {option}
              </MediumText>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
