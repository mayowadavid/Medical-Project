import { SubHeadingText } from "../core/Text";
import { FaFileMedicalAlt } from "react-icons/fa";

interface NoRecordStatusProps {
  status: string;
}

const NoRecordStatus = ({ status }: NoRecordStatusProps) => {
  return (
    <div className="flex flex-col items-center justify-center my-36">
      <FaFileMedicalAlt className="w-24 h-24 text-primary-50 m-2" />
      <SubHeadingText classes="font-title font-semibold m-2">
        {status}
      </SubHeadingText>
    </div>
  );
};

export default NoRecordStatus;
