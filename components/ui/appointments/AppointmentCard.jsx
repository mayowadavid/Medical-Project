import { Button } from "../core/Buttons";
import { SmallText } from "../core/Text";
import { Card } from "../core/Card";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiStatusOnline } from "react-icons/hi";
import { GiFaceToFace } from "react-icons/gi";
import { FaRegAddressBook } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import {
  getWeekday,
  getDate,
  getTime,
  getMonth,
  getFullYear,
} from "../../../utils/date/DateFunctions";

const AppointmentCard = ({ appointment }) => {
  const isVirtual = appointment.attendees?.every(
    (attendee) => attendee.mode === "VIRTUAL"
  );

  return (
    <Card classes="w-full bg-white mb-6" hoverEffect={true} dropShadow={true}>
      <div className="flex flex-col w-full relative py-2 px-3">
        <div className="flex flex-row items-end justify-start border-b pb-2">
          <div className="flex flex-col justify-center items-start px-2 mx-1">
            <p className="text-lg font-bold font-title text-primary-100">
              {appointment.title}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-2 my-1">
          <div className="flex flex-row items-center justify-between">
            <div className="flex justify-center items-center py-1 mb-1">
              <AiOutlineCalendar className="w-5 h-5 text-primary-100 mr-1" />
              <SmallText classes="text-sm font-general text-slate-700 ml-1">
                <span>
                  {getWeekday(appointment.startDateTimeUtc)?.substring(0, 3) +
                    " - "}
                </span>
                <span>
                  {getMonth(appointment.startDateTimeUtc)?.substring(0, 3) +
                    " "}
                </span>
                <span>{getDate(appointment.startDateTimeUtc) + " ,"}</span>
                <span>{" " + getFullYear(appointment.startDateTimeUtc)}</span>
              </SmallText>
            </div>
            <div className="flex justify-center items-center py-1 mb-1">
              <BiTimeFive className="w-5 h-5 text-primary-100 mr-1" />
              <SmallText classes="text-sm font-general text-slate-700 ml-1">
                {getTime(appointment.startDateTimeUtc)}
              </SmallText>
            </div>
          </div>
          {appointment.location && (
            <div className="flex flex-row justify-start items-center">
              <FaRegAddressBook className="w-5 h-5 text-primary-100 mr-1" />
              <SmallText classes="text-sm font-general text-slate-700 ml-1">
                {appointment.location}
              </SmallText>
            </div>
          )}
          <div className="flex items-center  w-full">
            <div className="w-full">
              <Button
                classes="font-general"
                primary={true}
                full={true}
                handleClick={() => {}}
                href={`/appointment/${appointment.id}`}
              >
                View Appointment
              </Button>
            </div>
          </div>
        </div>
        {isVirtual ? (
          <div className="absolute flex flex-row top-0 right-0 px-2 py-1 items-center justify-center">
            <HiStatusOnline className="w-4 h-4 text-emerald-500 mr-1" />
          </div>
        ) : (
          <div className="absolute flex flex-row top-0 right-0 px-2 py-1 items-center justify-center">
            <GiFaceToFace className="w-4 h-4 text-blue-500 mr-1" />
          </div>
        )}
      </div>
    </Card>
  );
};

export default AppointmentCard;
