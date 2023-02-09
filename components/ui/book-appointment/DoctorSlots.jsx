import { useState, useEffect } from "react";
import SelectLocation from "./SelectLocation";
import SelectTimeslot from "./SelectTimeslot";
import RoundedBottomBar from "../layouts/RoundedBottomBar";
import SelectSlot from "./SelectSlot";
import { useTimeslots } from "../../../lib/hooks/getTimeSlots";
import { useDisabledDates } from "../../../lib/hooks/getDisabledDates";
import { useQuickDateslots } from "../../../lib/hooks/getQuickDateslots";
import useModal from "../../../lib/hooks/useModal";
import { useHistory } from "react-router-dom";
import { createAppointmentMutation } from "../../../urql/mutations/appointment";
import { Urql } from "../../../urql/urql";
import { useMutation } from "urql";

const DoctorSlots = ({ doctor, btnText, href, item }) => {
  const getQuickDateSlots = useQuickDateslots();
  const getDisabledDates = useDisabledDates();
  const getTimeslots = useTimeslots();
  const [locationKey, setLocationKey] = useState();
  const [dateSlots, setDateSlots] = useState();
  const [slotKey, setSlotKey] = useState(0); // 0 : Morning , 1 : Afternoon , 2: Evening
  const [selectedDate, setSelectedDate] = useState();
  const [startDate, setStartDate] = useState();
  const [disabledDates, setDisabledDates] = useState();
  const [shownTimeslots, setTimeslots] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });
  const [selectedTimeslot, setSelectedTimeslot] = useState();
  const { setModal } = useModal();
  const [result, addAppointment] = useMutation(createAppointmentMutation);
  const history = useHistory();

  const bookAppointment = async() => {
    if (selectedDate && locationKey && selectedTimeslot) {
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
    }
  };

  // use effect chaining :
  // doctor -> setlocation -> setdateslots -> setSelectedDate -> set available time slots

  //Set location when doctor is loaded
  useEffect(() => {
    if (doctor) {
      setLocationKey(doctor.workSchedule.offline[0].branchid);
    }
  }, [doctor]);

  // set dateslots whenever locationKey is changed
  useEffect(() => {
    if (doctor && locationKey) {
      //console.log(locationKey);
      const dates = getQuickDateSlots(doctor, locationKey);
      setDateSlots(dates);
      setStartDate();
      setDisabledDates(
        getDisabledDates(
          doctor.workSchedule.offline.find((doc) => doc.branchid == locationKey)
            ? doctor.workSchedule.offline.find(
                (doc) => doc.branchid == locationKey
              ).specialHours
            : []
        )
      );
      setSelectedTimeslot();
    }
  }, [doctor, locationKey, getDisabledDates, getQuickDateSlots]);

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
      setTimeslots(getTimeslots(doctor, selectedDate, locationKey));
      setSlotKey(0);
      setSelectedTimeslot();
    }
  }, [selectedDate, doctor, locationKey, getTimeslots]);

  // reset timeslot whenever we change slots (eg : morning to afternoon)
  useEffect(() => {
    setSelectedTimeslot();
  }, [slotKey]);

  return (
    <div className="mt-4 font-general">
      <SelectLocation
        doctor={doctor}
        locationKey={locationKey}
        setLocationKey={setLocationKey}
      />
      <SelectTimeslot
        dateSlots={dateSlots}
        disabledDates={disabledDates}
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
        handleClick={() => {
          bookAppointment();
          history.push("/pre-appointment");
        }}
        clickable={selectedDate && locationKey && selectedTimeslot}
        href={href}
      />
    </div>
  );
};

export default DoctorSlots;
