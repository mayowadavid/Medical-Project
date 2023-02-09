import { HiStatusOnline } from "react-icons/hi";
import { FadedSmallText, RegularText, SmallText } from "../core/Text";

const DoctorDetails = ({ doctor }) => {
  return doctor ? (
    <div className="font-general">
      <div className="flex items-center my-2 relative">
        <img
          src={doctor.imageUrl}
          alt="myhc"
          width={60}
          height={60}
          className="rounded-half"
        />
        <div className="mx-2">
          <RegularText classes={"font-semibold mr-4"}>
            {doctor.name}
          </RegularText>
          <SmallText classes={"text-secondary-100 font-semibold"}>
            {doctor.specialty}
          </SmallText>
          <FadedSmallText>15 years experience</FadedSmallText>
        </div>
        {doctor.mode === "Online" || doctor.mode === "All" ? (
          <div className="absolute right-4 top-2">
            <HiStatusOnline className="w-4 h-4 text-emerald-500" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ) : (
    <div>No doctor Found</div>
  );
};

export default DoctorDetails;
