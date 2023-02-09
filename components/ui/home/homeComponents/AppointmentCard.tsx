import { Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FadedSmallText, RegularText } from "../../core/Text";
import {
  getWeekday,
  getDate,
  getMonth,
  getTime,
} from "../../../../utils/date/DateFunctions";

// interface AppoinmentCardProps {
//   appointment: {
//     title: string;
//     designation?: string;
//     isVirtual: boolean;
//     startDate: string;
//     endDate: string;
//   };
// }

const AppointmentCard = ({ appointment }) => {
  const isVirtual = appointment.attendees?.every(
    (attendee) => attendee.mode === "VIRTUAL"
  );
  return (
    <Link to="/landing-video-call">
      <div className="flex flex-col mr-3 p-4 items-center justify-between cursor-pointer w-72 flex-none border rounded-2xl font-general bg-tertiary-100">
        <div className="w-full flex mb-4 items-center">
          <div className="bg-white/40 shadow-sm h-max p-4 rounded-2xl flex items-center justify-center">
            <FaUserMd size="24px" color="#fff" opacity={"90%"} />
          </div>
          <div className="flex flex-col pl-3 pt-1 text-cardTypo grow w-full">
            <RegularText classes="text-white text-sm font-title whitespace-normal">
              {appointment?.title}
            </RegularText>
            <FadedSmallText classes=" text-white font-general mb-2 whitespace-normal text-sm">
              {appointment?.designation}
            </FadedSmallText>
          </div>
          {isVirtual && (
            <div className="p-2 rounded-xl bg-white/60 h-max">
              <HiOutlineVideoCamera size="20px" color="#ffffff" />
            </div>
          )}
        </div>
        <div className="text-sm w-full flex items-center text-white bg-white/20 shadow-sm rounded-xl px-3 py-4">
          <IoCalendarOutline size="28px" color="#ffffff" />
          <div className="ml-4">
            <span>
              {getWeekday(appointment?.startDateTimeUtc).substring(0, 3) +
                " - "}
            </span>
            <span>
              {getMonth(appointment?.startDateTimeUtc).substring(0, 3) + " "}
            </span>
            <span>{getDate(appointment?.startDateTimeUtc) + " ,"}</span>
            <br />
            <span>{getTime(appointment?.startDateTimeUtc) + " - "}</span>
            <span>{getTime(appointment?.endDateTimeUtc)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppointmentCard;
