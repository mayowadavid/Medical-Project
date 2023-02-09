import { useState, useEffect } from "react";
import SelectTimeslot from "./SelectTimeslot";
import RoundedBottomBar from "../layouts/RoundedBottomBar";
import SelectSlot from "./SelectSlot";
import { useTimeslots } from "../../../lib/hooks/getTimeSlots";
import { useQuickDateslots } from "../../../lib/hooks/getQuickDateslots";
import useModal from "../../../lib/hooks/useModal";
import { createAppointmentMutation } from "../../../urql/mutations/appointment";
import { useMutation } from "urql";
import { Urql } from "../../../urql/urql";

const DoctorSlotsOnline = ({ doctor, btnText, href, item }) => {
  const getQuickDateSlots = useQuickDateslots();
  const getTimeslots = useTimeslots();
  const [dateSlots, setDateSlots] = useState();
  const [slotKey, setSlotKey] = useState(0); // 0 : Morning , 1 : Afternoon , 2: Evening
  const [selectedDate, setSelectedDate] = useState();
  const [startDate, setStartDate] = useState();
  const [shownTimeslots, setTimeslots] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });
  const [selectedTimeslot, setSelectedTimeslot] = useState();
  const { setModal } = useModal();

  const bookAppointment = async() => {
    
    if (selectedDate && selectedTimeslot) {
      //setModal("appointment-disclaimer");
      const input = {
          data: {title: "doctor psychopath",
            location: "lisbon",
            description: "test data for",
            startDateTimeUtc: selectedDate,
            endDateTimeUtc: selectedTimeslot
          }
      };
      const result = await Urql.mutation(createAppointmentMutation, input );
      console.log(result);
      // console.log({
      //   date: selectedDate,
      //   time: selectedTimeslot,
      //});
    }
  };

  // use effect chaining :
  // doctor -> setdateslots -> setSelectedDate -> set available time slots

  // set dateslots whenever locationKey is changed
  useEffect(() => {
    if (doctor) {
      const dates = getQuickDateSlots(doctor);
      setDateSlots(dates);
      setStartDate();
      setSelectedTimeslot();
    }
  }, [doctor, getQuickDateSlots]);

  // Initialize selected date to first date whenever date slots are initialized
  useEffect(() => {
    if (dateSlots) {
      setSelectedDate(dateSlots[0]);
    }
  }, [dateSlots]);

  // set selected date to date picker's selected date
  useEffect(() => {
    if (startDate) {
      setSelectedDate(startDate);
    }
  }, [startDate]);

  // set timeslots whenever selected date is changed
  useEffect(() => {
    if (selectedDate) {
      setTimeslots(getTimeslots(doctor, selectedDate));
      setSlotKey(0);
      setSelectedTimeslot();
    }
  }, [selectedDate, doctor, getTimeslots]);

  // reset timeslot whenever we change slots (eg : morning to afternoon)
  useEffect(() => {
    setSelectedTimeslot();
  }, [slotKey]);

  return (
    <div className="mt-4 font-general">
      <SelectTimeslot
        dateSlots={dateSlots}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setStartDate={setStartDate}
        startDate={startDate}
      />
      <SelectSlot
        slotKey={slotKey}
        shownTimeslots={shownTimeslots}
        selectedTimeslot={selectedTimeslot}
        setSelectedTimeslot={setSelectedTimeslot}
        setSlotKey={setSlotKey}
      />
      <RoundedBottomBar
        text={btnText}
        handleClick={bookAppointment}
        clickable={selectedDate && selectedTimeslot}
        href={href}
      />
    </div>
  );
};

export default DoctorSlotsOnline;
