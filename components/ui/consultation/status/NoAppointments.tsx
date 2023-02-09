import { SubHeadingText } from "../../core/Text";
import { FaRegMehBlank } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import {
  MdOutlineUpcoming,
  MdFreeCancellation,
  MdCallMissedOutgoing,
} from "react-icons/md";

interface NoAppointmentsProps {
  status: string;
}

const NoAppointments = ({ status }: NoAppointmentsProps) => {
  const getImage = (filter: string) => {
    switch (filter) {
      case "All":
        return <FaRegMehBlank className="w-24 h-24 text-primary-50 m-2" />;
      case "Upcoming":
        return <MdOutlineUpcoming className="w-24 h-24 text-primary-50 m-2" />;
      case "Completed":
        return <IoMdDoneAll className="w-24 h-24 text-primary-50 m-2" />;
      case "Cancelled":
        return <MdFreeCancellation className="w-24 h-24 text-primary-50 m-2" />;
      default:
        return (
          <MdCallMissedOutgoing className="w-24 h-24 text-primary-50 m-2" />
        );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center my-36">
      {getImage(status)}
      <SubHeadingText classes="font-semibold my-4 text-gray-400">
        {status === "All" ? "No Appointments" : `No ${status} Appointments`}
      </SubHeadingText>
    </div>
  );
};

export default NoAppointments;
