import { Button } from "../../ui/core/Buttons";
import { SmallText } from "../core/Text";
import { Card } from "../../ui/core/Card";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiStatusOnline } from "react-icons/hi";
import { GiFaceToFace } from "react-icons/gi";
import { FaRegAddressBook } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

const ConsultationCard = ({ booking }) => {
  return (
    <Card
      classes="bg-white"
      hoverEffect={true}
      dropShadow={true}
      key={booking.id}
    >
      <div className="flex flex-col w-full relative py-2 px-3">
        <div className="flex flex-row items-end justify-start border-b pb-2">
          <img
            src={booking.imageUrl}
            alt="profile"
            className="w-16 h-16 object-cover rounded-half shadow-lg mx-1"
          />
          <div className="flex flex-col justify-center items-start px-2 mx-1">
            <p className="text-lg font-bold font-title text-primary-100">
              Dr. {booking.name}
            </p>
            <p className="text-sm font-general text-secondary-100">
              {booking.specialty}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-2 my-1">
          <div className="flex flex-row items-center justify-between">
            <div className="flex justify-center items-center py-1 mb-1">
              <AiOutlineCalendar className="w-5 h-5 text-primary-100 mr-1" />
              <SmallText classes="text-sm font-general text-slate-700 ml-1">
                {booking.date}
              </SmallText>
            </div>
            <div className="flex justify-center items-center py-1 mb-1">
              <BiTimeFive className="w-5 h-5 text-primary-100 mr-1" />
              <SmallText classes="text-sm font-general text-slate-700 ml-1">
                {booking.time}
              </SmallText>
            </div>
          </div>
          {booking.location && (
            <div className="flex flex-row justify-start items-center py-1 mb-1">
              <FaRegAddressBook className="w-5 h-5 text-primary-100 mr-1" />
              <SmallText classes="text-sm font-general text-slate-700 ml-1">
                {booking.location}
              </SmallText>
            </div>
          )}
          {booking.isCanceled || (
            <div className="flex items-center justify-center">
              <Link to="/consultation" className="w-full">
                <Button
                  classes="font-general"
                  primary={true}
                  full={true}
                  handleClick={() => {}}
                >
                  View Consultation
                </Button>
              </Link>
            </div>
          )}
        </div>
        {booking.isOnline ? (
          <div className="absolute flex flex-row top-0 right-0 px-2 py-1 items-center justify-center mb-1">
            <HiStatusOnline className="w-4 h-4 text-emerald-500 mr-1" />
            <SmallText classes="text-sm font-semibold font-general text-emerald-500 ml-1">
              Online
            </SmallText>
          </div>
        ) : (
          <div className="absolute flex flex-row top-0 right-0 px-2 py-1 items-center justify-center mb-1">
            <GiFaceToFace className="w-4 h-4 text-blue-500 mr-1" />
            <SmallText classes="text-sm font-semibold font-general text-blue-500 ml-1">
              Face-to-Face
            </SmallText>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ConsultationCard;
