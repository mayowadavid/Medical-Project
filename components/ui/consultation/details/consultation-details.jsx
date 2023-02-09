import { RegularText, MediumText } from "../../core/Text";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { HiStatusOnline } from "react-icons/hi";
import { MdOutlinePhonelinkRing } from "react-icons/md";

const ConsultationDetails = ({
  doctorName,
  doctorSpecialty,
  date,
  time,
  imageUrl,
  isCanceled,
  isCompleted,
}) => {
  return (
    <div className="flex flex-col">
      <RegularText classes="font-title my-4">Consultation Details</RegularText>
      <div className="flex flex-row items-end justify-center">
        <div className="flex w-1/5 items-center justify-center">
          <img
            src={imageUrl}
            alt={doctorName}
            className="object-cover rounded-xl border-2 shadow-md"
          />
        </div>
        <div className="flex flex-col w-4/5 items-start px-4">
          <MediumText classes="text-lg font-bold font-title text-primary-100">
            Dr. {doctorName}
          </MediumText>
          <MediumText classes="font-general text-secondary-100">
            {doctorSpecialty}
          </MediumText>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex flex-col justify-start bg-secondary-5 py-2 rounded">
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
              {time}
            </MediumText>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="flex w-1/5 items-center justify-center">
            <MdOutlinePhonelinkRing className="w-6 h-6 text-blue-500" />
          </div>
          <div className="flex w-4/5 items-start">
            <MediumText classes="font-general text-slate-700 italic text-blue-500">
              {isCompleted
                ? "Consultation completed"
                : isCanceled
                ? "CANCELLED"
                : "Link will be shown 10 minutes before the scheduled time"}
            </MediumText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationDetails;
