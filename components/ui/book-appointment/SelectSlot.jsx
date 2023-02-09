import Accordion from "../core/Accordion";
import { BsCalendar2Week, BsCalendar2X } from "react-icons/bs";
import { TimeSlotSection } from "./TimeSlotSection";
import { MediumText } from "../core/Text";
const SelectSlot = ({
  slotKey,
  shownTimeslots,
  selectedTimeslot,
  setSelectedTimeslot,
  setSlotKey,
}) => {
  return (
    <div className="my-4 flex flex-col">
      <Accordion
        title={
          <div
            className={
              slotKey === 0 ? "flex flex-row text-primary-100" : "flex flex-row"
            }
          >
            <BsCalendar2Week
              size="20px"
              className={slotKey === 0 ? "mr-2 text-primary-100" : "mr-2"}
            />
            Available Slots
          </div>
        }
        handleClick={() => setSlotKey((prev) => (prev == 0 ? null : 0))}
        content={
          (shownTimeslots.morning != [] && shownTimeslots.morning) ||
          (shownTimeslots.afternoon != [] && shownTimeslots.afternoon) ||
          (shownTimeslots.evening != [] && shownTimeslots.evening) ? (
            <TimeSlotSection
              setSelectedTimeslot={setSelectedTimeslot}
              selectedTimeslot={selectedTimeslot}
              timeslots={[
                ...shownTimeslots.morning,
                ...shownTimeslots.afternoon,
                ...shownTimeslots.evening,
              ]}
            />
          ) : (
            <MediumText classes="text-sm flex w-full justify-center">
              <BsCalendar2X size="20px" className="mr-2" />
              No Available Slots
            </MediumText>
          )
        }
        open={slotKey === 0}
        downArrowClasses={slotKey === 0 ? "text-primary-100" : ""}
        classes="px-0 py-4 border-b-0"
        contentClasses="py-4"
      />
    </div>
  );
};

export default SelectSlot;
