import { Card } from "../../core/Card";
import { FadedMediumText, MediumText } from "../../core/Text";

const PatientDetails = ({ patient }) => {
  return (
    <Card classes={"px-4 py-3"}>
      <div className="flex justify-between mb-2">
        <MediumText classes={"font-semibold"}>Patient</MediumText>
        <p className="text-xs bg-slate-200 rounded flex items-center font-medium px-1.5">
          COMPLETED
        </p>
      </div>
      <div className="flex justify-between">
        <FadedMediumText>Name</FadedMediumText>
        <MediumText>
          {patient?.firstName} {patient?.lastName}
        </MediumText>
      </div>
      <div className="flex justify-between">
        <FadedMediumText>Date of birth</FadedMediumText>
        <MediumText>{patient?.dateOfBirth}</MediumText>
      </div>
    </Card>
  );
};

export default PatientDetails;
