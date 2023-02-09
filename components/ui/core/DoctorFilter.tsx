import { BsFilter } from "react-icons/bs";
import { FadedMediumText } from "./Text";
import useModal from "../../../lib/hooks/useModal";
import { useState } from "react";
import DoctorFilterModal from "./modals/DoctorFilter";

const FilterButton = ({ children, handleClick, selected }) => {
  return (
    <div onClick={() => handleClick(children)}>
      <FadedMediumText
        classes={`border border-gray-400 px-4 py-1 rounded-md box-shadow-lg mr-2 ${
          selected ? "bg-secondary-100 text-white border-0" : ""
        }`}
      >
        {children}
      </FadedMediumText>
    </div>
  );
};

const FilterContainer = ({ filters, title, handleFilterClick, selected }) => {
  return (
    <div className="my-6">
      <div>{title}</div>
      <div className="flex my-2 items-center">
        {filters.map((filter: string, idx: number) => (
          <FilterButton
            key={idx}
            handleClick={(filter: string) => handleFilterClick(filter)}
            selected={selected === filter}
          >
            {filter}
          </FilterButton>
        ))}
      </div>
    </div>
  );
};

const DoctorFilter = ({ applyFilters }) => {
  const { setModal } = useModal();
  const [mode, setMode] = useState("All");
  const [gender, setGender] = useState("All");

  return (
    <>
      <div
        className="box-shadow-lg border border-gray-300 rounded p-1"
        onClick={() => {
          setModal("doctor-filters");
        }}
      >
        <BsFilter />
      </div>
      <DoctorFilterModal handleClose={() => applyFilters({ mode, gender })}>
        <FilterContainer
          filters={["Online", "Offline", "All"]}
          title={"Consultation mode"}
          handleFilterClick={(mode: string) => {
            setMode(mode);
          }}
          selected={mode}
        />
        <FilterContainer
          filters={["Male", "Female", "All"]}
          title={"Doctor gender"}
          handleFilterClick={(gender: string) => {
            setGender(gender);
          }}
          selected={gender}
        />
      </DoctorFilterModal>
    </>
  );
};

export default DoctorFilter;
