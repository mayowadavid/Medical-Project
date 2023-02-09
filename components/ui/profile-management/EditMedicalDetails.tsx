import TagsInput from "../core/TagsInput";
import { Dispatch, SetStateAction, useState } from "react";
import { EditInformationField } from "./EditInformationField";
import { EditSelectInfoField } from "./EditSelectInfoField";

interface EditMedicalDetailsProps {
  drugAllergy: string[];
  setDrugAllergy: Dispatch<SetStateAction<string[]>>;
  foodAllergy: string[];
  setFoodAllergy: Dispatch<SetStateAction<string[]>>;
  medicalHistory: string[];
  setMedicalHistory: Dispatch<SetStateAction<string[]>>;
  currentMedications: string[];
  setCurrentMedications: Dispatch<SetStateAction<string[]>>;
  height: number;
  weight: number;
  bloodType: string;
  setBloodType: Dispatch<SetStateAction<string>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditMedicalDetails = ({
  drugAllergy,
  setDrugAllergy,
  foodAllergy,
  setFoodAllergy,
  medicalHistory,
  setMedicalHistory,
  currentMedications,
  setCurrentMedications,
  height,
  weight,
  bloodType,
  setBloodType,
  handleChange,
}: EditMedicalDetailsProps) => {
  const [medHistoryTag, setMedHistoryTag] = useState<string>("");
  const [currentMedTag, setCurrentMedTag] = useState<string>("");
  const [drugAllergyTag, setDrugAllergyTag] = useState("");
  const [foodAllergyTag, setFoodAllergyTag] = useState("");
  const [showBloodTypeDropdown, setShowBloodTypeDropdown] = useState(false);
  return (
    <div className="flex flex-col mt-6 mb-28">
      <EditInformationField
        label="Height"
        name="height"
        type="number"
        value={height}
        method={handleChange}
        suffix="cm"
      />
      <EditInformationField
        label="Weight"
        name="weight"
        type="number"
        value={weight}
        method={handleChange}
        suffix="kg"
      />
      <EditSelectInfoField
        dropdownMenuOpen={showBloodTypeDropdown}
        setDropdownMenuOpen={setShowBloodTypeDropdown}
        label="Blood Type"
        name="bloodType"
        value={bloodType}
        method={setBloodType}
        options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
      />
      <div className="flex items-center p-1 mt-2 font-medium">
        Drug Allergies
      </div>
      <div className="p-1 pt- w-full mb-2">
        <TagsInput
          tagText={drugAllergyTag}
          setTagText={setDrugAllergyTag}
          placeholder="Enter Drug Allergy"
          tagsList={drugAllergy}
          setTagsList={setDrugAllergy}
        />
      </div>
      <div className="flex items-center p-1 font-medium">Food Allergies</div>
      <div className="p-1 w-full mb-2">
        <TagsInput
          tagText={foodAllergyTag}
          setTagText={setFoodAllergyTag}
          placeholder="Enter Food Allergy"
          tagsList={foodAllergy}
          setTagsList={setFoodAllergy}
        />
      </div>
      <div className="flex items-center p-1 font-medium">Medical History</div>
      <div className="p-1 w-full mb-2">
        <TagsInput
          tagText={medHistoryTag}
          setTagText={setMedHistoryTag}
          placeholder="Enter Medical Condition"
          tagsList={medicalHistory}
          setTagsList={setMedicalHistory}
        />
      </div>
      <div className="flex items-center p-1 font-medium">
        Current medication
      </div>
      <div className="p-1 w-full mb-2">
        <TagsInput
          tagText={currentMedTag}
          setTagText={setCurrentMedTag}
          placeholder="Enter Current Medication"
          tagsList={currentMedications}
          setTagsList={setCurrentMedications}
        />
      </div>
    </div>
  );
};

export default EditMedicalDetails;
