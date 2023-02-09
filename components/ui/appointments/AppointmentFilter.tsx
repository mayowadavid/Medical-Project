import { BsFilter } from "react-icons/bs";
import { FadedMediumText } from "../../ui/core/Text";
import useModal from "../../../lib/hooks/useModal";
import { useState } from "react";
import AppointmentFilterModal from "../../ui/core/modals/AppointmentFilter";

const FilterButton = ({ children, handleClick, selected }) => {
  return (
    <div className="my-1" onClick={() => handleClick(children)}>
      <FadedMediumText
        classes={`border border-gray-400 px-4 py-1 rounded-md box-shadow-lg mr-2 text-center ${
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
      <div className="grid grid-cols-2 my-1 items-start">
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

const AppointmentFilter = ({ filter, applyFilters }) => {
  const { setModal } = useModal();
  const [mode, setMode] = useState("All");

  return (
    <>
      <div
        className="box-shadow-lg border border-gray-300 rounded p-1"
        onClick={() => {
          setModal("appointment-filters");
        }}
      >
        <BsFilter className="text-xl" />
      </div>
      <AppointmentFilterModal handleClose={() => applyFilters({ mode })}>
        <FilterContainer
          filters={["All", "Upcoming", "Completed", "Cancelled", "Missed"]}
          title={"Choose a status"}
          handleFilterClick={(mode: string) => {
            setMode(mode);
          }}
          selected={mode}
        />
      </AppointmentFilterModal>
    </>
  );
};

export default AppointmentFilter;
