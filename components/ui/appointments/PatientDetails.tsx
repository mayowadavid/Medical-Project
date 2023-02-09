import { RegularText, MediumText } from "../core/Text";
import {
  BsPerson,
  BsPhone,
  BsCalendar4Week,
  BsGenderMale,
  BsGenderFemale,
} from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import {
  getDate,
  getMonth,
  getFullYear,
} from "../../../utils/date/DateFunctions";
interface PatientDetailsProps {
  patient: any;
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {
  const getBirthDate = () => {
    const date = new Date(patient?.birthDate);
    return `${getDate(date)} ${getMonth(date)} ${getFullYear(date)}`;
  };

  const genderSymbol = (gender: string) => {
    switch (gender) {
      case "male":
        return <BsGenderMale className="w-6 h-6 text-primary-100" />;
      case "female":
        return <BsGenderFemale className="w-6 h-6 text-primary-100" />;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col">
      <RegularText classes="font-title mt-4 mb-2">Patient Details</RegularText>
      <div className="flex flex-col justify-start bg-secondary-5 py-2 rounded">
        {patient ? (
          <div className="flex flex-row items-center justify-start">
            <div className="flex w-1/5 items-center justify-center my-1">
              <BsPerson className="w-6 h-6 text-primary-100" />
            </div>
            <div className="flex w-4/5 items-start my-1">
              <MediumText classes="font-general text-slate-700">
                {patient?.firstName} {patient?.lastName}
              </MediumText>
            </div>
          </div>
        ) : (
          <></>
        )}
        {patient?.birthDate && (
          <div className="flex flex-row items-center justify-start">
            <div className="flex w-1/5 items-center justify-center my-1">
              <BsCalendar4Week className="w-6 h-6 text-primary-100" />
            </div>
            <div className="flex w-4/5 items-start my-1">
              <MediumText classes="font-general text-slate-700">
                {getBirthDate()}
              </MediumText>
            </div>
          </div>
        )}
        {patient?.gender && (
          <div className="flex flex-row items-center justify-start">
            <div className="flex w-1/5 items-center justify-center my-1">
              {genderSymbol(patient?.gender)}
            </div>
            <div className="flex w-4/5 items-start my-1">
              <MediumText classes="font-general text-slate-700">
                {patient?.gender?.charAt(0).toUpperCase() +
                  patient?.gender?.slice(1)}
              </MediumText>
            </div>
          </div>
        )}
        {/* {email ? (
          <div className="flex flex-row items-center justify-start">
            <div className="flex w-1/5 items-center justify-center my-1">
              <MdOutlineMail className="w-6 h-6 text-primary-100" />
            </div>
            <div className="flex w-4/5 items-start">
              <MediumText classes="font-general text-slate-700">
                {email}
              </MediumText>
            </div>
          </div>
        ) : (
          <></>
        )} */}
        {/* {patient?.phoneNumber ? (
          <div className="flex flex-row items-center justify-start">
            <div className="flex w-1/5 items-center justify-center my-1">
              <BsPhone className="w-6 h-6 text-primary-100" />
            </div>
            <div className="flex w-4/5 items-start">
              <MediumText classes="font-general text-slate-700">
                {patient?.phoneNumber}
              </MediumText>
            </div>
          </div>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
};

export default PatientDetails;
