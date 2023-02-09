import { MediumText, RegularText, SmallText } from "../core/Text";
import { forwardRef } from "react";
import {
  getMonth,
  getWeekday,
  getDate,
  isWeekday,
} from "../../../utils/date/DateFunctions";
import { BsCalendarEvent } from "react-icons/bs";
import DatePicker from "react-datepicker";
import { AiOutlineFieldTime } from "react-icons/ai";

const SelectTimeslot = ({
  dateSlots,
  selectedDate,
  setStartDate,
  setSelectedDate,
  startDate,
  disabledDates,
}) => {
  const DateCustomInput = forwardRef(function DateCustomInput(
    { value, onClick },
    ref
  ) {
    return (
      <div onClick={onClick} ref={ref}>
        {startDate != undefined ? (
          <div className="flex flex-col items-center justify-center shadow w-20 h-16 rounded-lg border bg-secondary-5 border-secondary-100 text-secondary-100">
            <MediumText>{getWeekday(value).substring(0, 3)}</MediumText>
            <div className="flex items-center justify-between mt-0.5">
              <MediumText classes="mr-1 font-medium">
                {getDate(value)}
              </MediumText>
              <MediumText classes="font-medium">
                {getMonth(value).substring(0, 3)}
              </MediumText>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center shadow w-20 h-16 rounded-lg border">
            <SmallText classes="flex flex-col items-center justify-center">
              <BsCalendarEvent size="20px" className="mb-2" />
              Select Date
            </SmallText>
          </div>
        )}
      </div>
    );
  });

  return (
    <>
      <RegularText classes="font-medium flex flex-row items-center">
        <AiOutlineFieldTime size="20px" className="mr-2" />
        Select a timeslot
      </RegularText>
      <div className="mt-2 mb-4 flex flex-row items-center justify-between">
        {dateSlots?.map((date, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center shadow w-20 mr-2 h-16 rounded-lg border ${
              selectedDate?.toDateString() == date.toDateString() &&
              "bg-secondary-5 border-secondary-100 text-secondary-100"
            }`}
            onClick={() => {
              setStartDate();
              setSelectedDate(date);
            }}
          >
            <MediumText>
              {getWeekday(date.toDateString()).substring(0, 3)}
            </MediumText>
            <div className="flex items-center justify-between mt-0.5">
              <MediumText classes="mr-1 font-medium">
                {getDate(date)}
              </MediumText>
              <MediumText classes="font-medium">
                {getMonth(date.toDateString()).substring(0, 3)}
              </MediumText>
            </div>
          </div>
        ))}
        {disabledDates ? (
          <DatePicker
            customInput={<DateCustomInput />}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            wrapperClassName="!w-auto"
            minDate={dateSlots && dateSlots[0] ? dateSlots[0] : new Date()}
            filterDate={isWeekday}
            excludeDates={disabledDates}
          />
        ) : (
          <DatePicker
            customInput={<DateCustomInput />}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            wrapperClassName="!w-auto"
            minDate={dateSlots && dateSlots[0] ? dateSlots[0] : new Date()}
            filterDate={isWeekday}
          />
        )}
      </div>
    </>
  );
};

export default SelectTimeslot;
