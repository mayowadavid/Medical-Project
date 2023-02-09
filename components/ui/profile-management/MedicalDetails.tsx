import { ViewListField } from "./ViewListField";
import { ViewInformationField } from "./ViewInformationField";

interface MedicalDetailsProps {
  drugAllergy: string[];
  foodAllergy: string[];
  medicalHistory: string[];
  currentMedications: string[];
  height: number;
  weight: number;
  bloodType: string;
}

const MedicalDetails = ({
  drugAllergy,
  foodAllergy,
  medicalHistory,
  currentMedications,
  height,
  weight,
  bloodType,
}: MedicalDetailsProps) => {
  return (
    <div className="flex flex-col mt-6 mb-24">
      <ViewInformationField label="Height" value={height} suffix="cm" />
      <ViewInformationField label="Weight" value={weight} suffix="kg" />
      <ViewInformationField label="Blood Type" value={bloodType} />
      <ViewListField label="Drug Allergies" value={drugAllergy} />
      <ViewListField label="Food Allergies" value={foodAllergy} />
      <ViewListField label="Medical History" value={medicalHistory} />
      <ViewListField label="Current Medications" value={currentMedications} />
    </div>
  );
};

export default MedicalDetails;
