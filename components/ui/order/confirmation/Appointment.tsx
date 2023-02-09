import {
  getDate,
  getMonth,
  getTime,
} from "../../../../utils/date/DateFunctions";
import { Button } from "../../core/Buttons";
import { FadedMediumText, MediumText, RegularText } from "../../core/Text";

interface AppointmentProps {
  booked: boolean;
  date: string;
  location: string;
}

interface AppointmentDetailsProps {
  date: string;
  location: string;
}

const AppointmentDetails = ({ date, location }: AppointmentDetailsProps) => {
  return (
    <div className="border border-gray-300 rounded-lg px-4 py-2">
      <RegularText>Appointment Details</RegularText>
      <div className="flex justify-between">
        <FadedMediumText>Date</FadedMediumText>
        <MediumText>
          {getDate(date)} {getMonth(date)}
        </MediumText>
      </div>
      <div className="flex justify-between">
        <FadedMediumText>Time</FadedMediumText>
        <MediumText>{getTime(date)}</MediumText>
      </div>
      <div className="flex justify-between">
        <FadedMediumText>Location</FadedMediumText>
        <MediumText>{location}</MediumText>
      </div>
      <Button primary full>
        View Appointment
      </Button>
    </div>
  );
};

const Appointment = ({ booked, date, location }: AppointmentProps) => {
  return (
    <div>
      {booked ? (
        <AppointmentDetails date={date} location={location} />
      ) : (
        <Button primary full>
          Book Appointment
        </Button>
      )}
    </div>
  );
};

export default Appointment;
