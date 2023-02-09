import { RegularText, MediumText } from "../core/Text";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiFaceToFace } from "react-icons/gi";
import { FaRegAddressBook } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { HiStatusOnline } from "react-icons/hi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { Button } from "../core/Buttons";

interface AppointmentDetailsProps {
  doctorName: string;
  doctorSpeciality: any;
  imageUrl: string;
  status: string;
  location: string;
  isVirtual: boolean;
  date: string;
  startTime: string;
  endTime: string;
  showButton: boolean;
}

const AppointmentDetails = ({
  doctorName,
  doctorSpeciality,
  imageUrl,
  status,
  location,
  isVirtual,
  date,
  startTime,
  endTime,
  showButton,
}: AppointmentDetailsProps) => {
  return (
    <div className="flex flex-col">
      <RegularText classes="font-title my-4">Appointment Details</RegularText>
      <div className="flex flex-row items-end justify-center">
        <div className="flex w-1/5 items-center justify-center">
          <img
            src={imageUrl}
            alt={doctorName}
            width={64}
            height={64}
            className="object-cover w-24 h-20 rounded-xl border-2 shadow-md"
          />
        </div>
        <div className="flex flex-col w-4/5 items-start px-4">
          <MediumText classes="text-lg font-bold font-title text-primary-100">
            {doctorName}
          </MediumText>
          {doctorSpeciality?.map((speciality: any, index: any) => (
            <MediumText classes="font-general text-secondary-100" key={index}>
              {speciality.name}
            </MediumText>
          ))}
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex flex-col justify-start bg-secondary-5 py-2 rounded">
        {isVirtual ? (
          <div className="flex flex-row items-center justify-start mb-1">
            <div className="flex w-1/5 items-center justify-center">
              <HiStatusOnline className="w-7 h-7 text-emerald-500" />
            </div>
            <div className="flex w-4/5 items-start">
              <MediumText classes="font-title font-semibold text-emerald-500">
                Online Consultation
              </MediumText>
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-start mb-1">
            <div className="flex w-1/5 items-center justify-center">
              <GiFaceToFace className="w-7 h-7 text-blue-500" />
            </div>
            <div className="flex w-4/5 items-start">
              <MediumText classes="font-title font-semibold text-blue-500">
                Face-to-face Consultation
              </MediumText>
            </div>
          </div>
        )}
        <div className="flex flex-row items-center justify-start mb-1">
          <div className="flex w-1/5 items-center justify-center">
            <AiOutlineCalendar className="w-6 h-6 text-primary-100" />
          </div>
          <div className="flex w-4/5 items-start">
            <MediumText classes="font-general text-slate-700">
              {date}
            </MediumText>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start mb-1">
          <div className="flex w-1/5 items-center justify-center">
            <BiTimeFive className="w-6 h-6 text-primary-100" />
          </div>
          <div className="flex w-4/5 items-start">
            <MediumText classes="font-general text-slate-700">
              {startTime} {status === "completed" ? ` - ${endTime}` : ""}
            </MediumText>
          </div>
        </div>

        {!isVirtual && (
          <div className="flex flex-row items-center justify-start mb-2">
            <div className="flex w-1/5 items-center justify-center">
              <FaRegAddressBook className="w-6 h-6 text-primary-100" />
            </div>
            <div className="flex w-4/5 items-center">
              <MediumText classes="font-general text-slate-700">
                {location}
              </MediumText>
            </div>
          </div>
        )}

        {!isVirtual ? (
          <div className="flex flex-row items-center justify-start my-1 mx-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.907878010109!2d-122.29058584909824!3d37.80240987909853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e7b7b6c7a8d%3A0x3b8f7b7b7b7b7b7b7!2s747+52nd+St%2C+Oakland%2C+CA+94609%2C+USA!5e0!3m2!1sen!2sin!4v1559240982994!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen={false}
              loading="lazy"
              title="Google Maps"
              className="border border-slate-300 rounded-md shadow-sm"
            />
          </div>
        ) : (
          <div className="flex flex-row items-center justify-start">
            <div className="flex w-1/5 items-center justify-center">
              <MdOutlinePhonelinkRing className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex w-4/5 items-start pr-4">
              {showButton ? (
                <Button
                  classes="font-title font-semibold"
                  primary={true}
                  full={true}
                  handleClick={() => {
                    console.log("Go to meeting");
                  }}
                >
                  Go to meeting
                </Button>
              ) : (
                <MediumText classes="font-general text-slate-700 italic text-blue-500">
                  {status === "completed"
                    ? "Consultation completed"
                    : status === "cancelled"
                    ? "CANCELLED"
                    : "Link will be shown 5 minutes before the scheduled time"}
                </MediumText>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentDetails;
