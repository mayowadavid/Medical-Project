import GenderScreen from "./screens/GenderScreen";
import PersonalDetails from "./screens/PersonalDetails";
import { useState, useEffect, useCallback } from "react";
import NationalityScreen from "./screens/NationalityScreen";
import AddressScreen from "./screens/AddressScreen";
import AllergiesScreen from "./screens/AllergiesScreen";
import MedicalsScreen from "./screens/MedicalsScreen";
import KinDetailsScreen from "./screens/KinDetailsScreen";
import useLocalDetails from "../../../lib/hooks/useLocalDetails";
import { getIdentifierNameFromKey } from "../../../lib/helper/identitifiers";
interface OnboardingStepperProps {
  currentScreen: number;
  startingScreen: number;
  nextFunc: () => void;
  prevFunc: () => void;
}

const OnboardingStepper = ({
  currentScreen,
  startingScreen,
  nextFunc,
  prevFunc,
}: OnboardingStepperProps) => {
  const {
    getAddresses,
    getAllergies,
    getCountry,
    getCurrentMedications,
    getDob,
    getFirstname,
    getGender,
    getIdentities,
    getLastname,
    getMedicalHistory,
    getSalutation,
    getNokDetails,
  } = useLocalDetails();
  const [salutation, setSalutation] = useState<string>("Mr");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [country, setCountry] = useState<string>("Select country");
  const [selectedIdType, setSelectedIdType] = useState("NRIC");
  const [idValue, setIdValue] = useState<string>("");
  const [addressLine, setAddressLine] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [city, setCity] = useState("");
  const [addressState, setAddressState] = useState("");
  const [unitNo, setUnitNo] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [drugAllergy, setDrugAllergy] = useState<string[]>([]);
  const [foodAllergy, setFoodAllergy] = useState<string[]>([]);
  const [medicalHistory, setMedicalHistory] = useState<string[]>([]);
  const [currentMedications, setCurrentMedications] = useState<string[]>([]);
  const [firstNameOfKin, setFirstNameOfKin] = useState("");
  const [lastNameOfKin, setLastNameOfKin] = useState("");
  const [phoneOfKin, setPhoneOfKin] = useState<string>("");
  const [relationshipOfKin, setRelationshipOfKin] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Date>(new Date());

  const initialiseValues = useCallback(() => {
    getSalutation().then((value) => setSalutation(value));
    getFirstname().then((value) => setFirstName(value));
    getLastname().then((value) => setLastName(value));
    getDob().then((value) => setBirthDate(new Date(value)));
    getGender().then((value) => setGender(value));
    getCountry().then((value) => setCountry(value));
    getIdentities().then((value) => {
      if (value.length) {
        console.log(value);
        setSelectedIdType(getIdentifierNameFromKey[value[0].key]);
        setIdValue(value[0].value);
      }
    });
    getAddresses().then((value) => {
      if (value.length && value) {
        setAddressLine(
          value[0]?.fields.find((field) => field.key == "addressLine")?.value
            ? value[0].fields.find((field) => field.key == "addressLine").value
            : ""
        );
        setAddressLine2(
          value[0]?.fields.find((field) => field.key == "addressLine2")?.value
            ? value[0].fields.find((field) => field.key == "addressLine2").value
            : ""
        );
        setCity(
          value[0]?.fields.find((field) => field.key == "city")?.value
            ? value[0].fields.find((field) => field.key == "city").value
            : ""
        );
        setAddressState(
          value[0]?.fields.find((field) => field.key == "state")?.value
            ? value[0].fields.find((field) => field.key == "state").value
            : ""
        );
        setPostalCode(
          value[0]?.fields.find((field) => field.key == "postalCode")?.value
            ? value[0].fields.find((field) => field.key == "postalCode").value
            : ""
        );
        setUnitNo(
          value[0]?.fields.find((field) => field.key == "unit")?.value
            ? value[0].fields.find((field) => field.key == "unit").value
            : ""
        );
      }
    });
    getAllergies().then((value) => {
      if (value) {
        setDrugAllergy(value.drug_allergies.map((d) => d.name));
        setFoodAllergy(value.food_allergies.map((f) => f.name));
      }
    });
    getMedicalHistory().then((value) => setMedicalHistory(value));
    getCurrentMedications().then((value) => setCurrentMedications(value));
    getNokDetails().then((value) => {
      setFirstNameOfKin(value.firstname);
      setLastNameOfKin(value.lastname);
      setPhoneOfKin(value.phone[0].value);
      setRelationshipOfKin(value.relationship);
    });
  }, [
    getAddresses,
    getAllergies,
    getCountry,
    getCurrentMedications,
    getDob,
    getFirstname,
    getGender,
    getIdentities,
    getLastname,
    getMedicalHistory,
    getNokDetails,
    getSalutation,
  ]);
  useEffect(() => {
    initialiseValues();
  }, [initialiseValues]);

  return (
    <div className="px-4 font-general">
      {currentScreen == 0 ? (
        <PersonalDetails
          salutation={salutation}
          setSalutation={setSalutation}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 1 ? (
        <GenderScreen
          gender={gender}
          setGender={setGender}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 2 ? (
        <NationalityScreen
          country={country}
          setCountry={setCountry}
          idValue={idValue}
          setIdValue={setIdValue}
          selectedIdType={selectedIdType}
          setSelectedIdType={setSelectedIdType}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 3 ? (
        <AddressScreen
          addressLine={addressLine}
          setAddressLine={setAddressLine}
          addressLine2={addressLine2}
          setAddressLine2={setAddressLine2}
          city={city}
          setCity={setCity}
          addressState={addressState}
          setAddressState={setAddressState}
          unitNo={unitNo}
          setUnitNo={setUnitNo}
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 4 ? (
        <AllergiesScreen
          drugAllergy={drugAllergy}
          setDrugAllergy={setDrugAllergy}
          foodAllergy={foodAllergy}
          setFoodAllergy={setFoodAllergy}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 5 ? (
        <MedicalsScreen
          medicalHistory={medicalHistory}
          setMedicalHistory={setMedicalHistory}
          currentMedications={currentMedications}
          setCurrentMedications={setCurrentMedications}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 6 ? (
        <KinDetailsScreen
          firstNameOfKin={firstNameOfKin}
          setFirstNameOfKin={setFirstNameOfKin}
          setLastNameOfKin={setLastNameOfKin}
          lastNameOfKin={lastNameOfKin}
          phoneOfKin={phoneOfKin}
          setPhoneOfKin={setPhoneOfKin}
          relationshipOfKin={relationshipOfKin}
          setRelationshipOfKin={setRelationshipOfKin}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
          nextFunc={() => {
            // console.log("Name of NOK : ", nameOfKin);
            console.log("Phone no. of NOK :", phoneOfKin);
            console.log("Relationship to Patient :", relationshipOfKin);
          }}
          customNextBtnText="Finish"
          nextHref="/home"
        />
      ) : (
        <div>Thank you </div>
      )}
    </div>
  );
};

export default OnboardingStepper;
