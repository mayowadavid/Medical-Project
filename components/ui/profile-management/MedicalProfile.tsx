import { useState, useEffect, useCallback } from "react";
import FloaterButton from "./FloaterButton";

import MedicalDetails from "./MedicalDetails";
import EditMedicalDetails from "./EditMedicalDetails";

import useLocalDetails from "../../../lib/hooks/useLocalDetails";
import { Storage } from "@capacitor/storage";

interface MedicalProfileProps {
  isEdit: boolean;
  toggleEdit: () => void;
}

export const MedicalProfile = ({ isEdit, toggleEdit }: MedicalProfileProps) => {
  const {
    getAllergies,
    getCurrentMedications,
    getMedicalHistory,
    getBodyStat,
  } = useLocalDetails();

  const [drugAllergy, setDrugAllergy] = useState<string[]>([]);
  const [foodAllergy, setFoodAllergy] = useState<string[]>([]);
  const [medicalHistory, setMedicalHistory] = useState<string[]>([]);
  const [currentMedications, setCurrentMedications] = useState<string[]>([]);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bloodType, setBloodType] = useState<string>("");

  const initialiseValues = useCallback(async () => {
    getAllergies().then((value) => {
      setDrugAllergy(value.drugAllergies);
      setFoodAllergy(value.foodAllergies);
    });
    getMedicalHistory().then((value) => setMedicalHistory(value));
    getCurrentMedications().then((value) => setCurrentMedications(value));
    getBodyStat().then((value) => {
      setHeight(value.height);
      setWeight(value.weight);
      setBloodType(value.bloodType);
    });
  }, [getAllergies, getBodyStat, getCurrentMedications, getMedicalHistory]);

  useEffect(() => {
    initialiseValues();
  }, [initialiseValues]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name === "height") {
      setHeight(value);
    } else if (name === "weight") {
      setWeight(value);
    }
    // else if (name === "bloodType") {
    //   setBloodType(value);
    // }
  };

  const saveData = async () => {
    await Storage.set({
      key: "allergies",
      value: JSON.stringify({
        drugAllergies: drugAllergy,
        foodAllergies: foodAllergy,
      }),
    });
    await Storage.set({
      key: "medicalHistory",
      value: JSON.stringify(medicalHistory),
    });
    await Storage.set({
      key: "currentMedications",
      value: JSON.stringify(currentMedications),
    });
    await Storage.set({
      key: "bodyStat",
      value: JSON.stringify({
        height,
        weight,
        bloodType,
      }),
    });
  };

  const handleSave = () => {
    saveData();
    toggleEdit();
  };

  const handleCancel = () => {
    initialiseValues();
    toggleEdit();
  };

  return (
    <div>
      {!isEdit ? (
        <MedicalDetails
          drugAllergy={drugAllergy}
          foodAllergy={foodAllergy}
          medicalHistory={medicalHistory}
          currentMedications={currentMedications}
          height={height}
          weight={weight}
          bloodType={bloodType}
        />
      ) : (
        <EditMedicalDetails
          drugAllergy={drugAllergy}
          foodAllergy={foodAllergy}
          medicalHistory={medicalHistory}
          currentMedications={currentMedications}
          height={height}
          weight={weight}
          bloodType={bloodType}
          setBloodType={setBloodType}
          setMedicalHistory={setMedicalHistory}
          setCurrentMedications={setCurrentMedications}
          setFoodAllergy={setFoodAllergy}
          setDrugAllergy={setDrugAllergy}
          handleChange={handleChange}
        />
      )}
      <FloaterButton
        isEdit={isEdit}
        toggleEdit={toggleEdit}
        handleCancel={handleCancel}
        handleSave={handleSave}
      />
    </div>
  );
};

export default MedicalProfile;
