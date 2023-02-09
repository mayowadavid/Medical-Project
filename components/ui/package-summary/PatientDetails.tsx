import { FadedMediumText, FadedSmallText, RegularText } from "../core/Text";

interface PatientDetailsProps {}

const PatientDetails = ({}) => {
  return (
    <div className="flex items-center my-6">
      <div>
        <RegularText>Patient Details</RegularText>
        <FadedMediumText>James Collins</FadedMediumText>
        <FadedMediumText>johndoe@gmail.com</FadedMediumText>
      </div>
      <FadedSmallText classes={"text-blue-600 font-semibold underline ml-auto"}>
        Change
      </FadedSmallText>
    </div>
  );
};

export default PatientDetails;
