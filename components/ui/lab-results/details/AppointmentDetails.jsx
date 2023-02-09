import { Card } from "../../core/Card";
import { FadedMediumText, MediumText } from "../../core/Text";
import {
  getWeekday,
  getDate,
  getMonth,
  getFullYear,
  getTime,
} from "../../../../utils/date/DateFunctions";

const AppointmentDetails = ({ appointment }) => {
  const getAppointmentDate = () => {
    const date = new Date(appointment?.startDateTimeUTC);
    return `${getWeekday(date)}, ${getDate(date)} ${getMonth(
      date
    )} ${getFullYear(date)}`;
  };

  const getAppointmentTime = () => {
    const date = new Date(appointment?.startDateTimeUTC);
    return `${getTime(date)}`;
  };

  return (
    <Card classes={"px-4 py-3"}>
      <MediumText classes={"mb-2 font-semibold"}>
        Appointment Details
      </MediumText>
      <div className="flex justify-between">
        <FadedMediumText>Appointment ID</FadedMediumText>
        <MediumText>{appointment?.id}</MediumText>
      </div>
      <div className="flex justify-between">
        <FadedMediumText>Booking date</FadedMediumText>
        <MediumText>{getAppointmentDate()}</MediumText>
      </div>
      <div className="flex justify-between">
        <FadedMediumText>Booking time</FadedMediumText>
        <MediumText>{getAppointmentTime()}</MediumText>
      </div>
    </Card>
  );
};

export default AppointmentDetails;
