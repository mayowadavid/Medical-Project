import { RegularText, SmallText, FadedSmallText } from "../../core/Text";
import Bookmark from "../../core/Bookmark";

const DoctorHead = ({ doctorData }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center my-2 py-2">
        <img
          src={doctorData?.imageUrl}
          alt="myhc"
          width={60}
          height={60}
          className="rounded-half"
        />
        <div className="mx-2">
          <RegularText classes={"font-semibold mr-4"}>
            {doctorData?.name}
          </RegularText>
          <SmallText classes={"text-secondary-100 font-semibold"}>
            {doctorData?.speciality}
          </SmallText>
          <FadedSmallText>{doctorData?.experience}</FadedSmallText>
        </div>
      </div>
      <Bookmark />
    </div>
  );
};

export default DoctorHead;
