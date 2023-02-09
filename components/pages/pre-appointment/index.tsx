import { IonContent, IonPage } from "@ionic/react";
import { useState, useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";
import Container from "../../ui/layouts/Container";
import Symptoms from "../../ui/pre-appointment/Symptoms";
import PersonalDetails from "../../ui/onboarding/screens/PersonalDetails";
import GenderScreen from "../../ui/onboarding/screens/GenderScreen";
import AddressScreen from "../../ui/onboarding/screens/AddressScreen";
import AllergiesScreen from "../../ui/onboarding/screens/AllergiesScreen";
import MedicalsScreen from "../../ui/onboarding/screens/MedicalsScreen";
import KinDetailsScreen from "../../ui/onboarding/screens/KinDetailsScreen";
import NationalityScreen from "../../ui/onboarding/screens/NationalityScreen";
import { useRouter } from "next/router";
import Records from "../../ui/pre-appointment/Records";
import Summary from "../../ui/pre-appointment/Summary";
import useLocalDetails from "../../../lib/hooks/useLocalDetails";
import { BlankHeader } from "../../ui/layouts/Headers";
import { useCallback } from "react";
import { getIdentifierNameFromKey } from "../../../lib/helper/identitifiers";

const PreAppointmentPage = () => {
  const router = useRouter();
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
  const [currentScreen, setCurrentScreen] = useState(0);
  const [salutation, setSalutation] = useState<string>("Mr");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [country, setCountry] = useState<string>("Select country");
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
  const [selectedIdType, setSelectedIdType] = useState("NRIC");
  const [startingScreen, setStartingScreen] = useState<number>(0);

  const getStartingDetailsScreen = useCallback(() => {
    getFirstname().then((value) => {
      if (value == "") {
        setStartingScreen(0);
      } else {
        getGender().then((value) => {
          if (value == "") {
            setStartingScreen(1);
          } else {
            getCountry().then((value) => {
              if (value == "Select country") {
                setStartingScreen(2);
              } else {
                getAddresses().then((value) => {
                  if (value[0].location == "") {
                    setStartingScreen(3);
                  } else {
                    setStartingScreen(4);
                  }
                });
              }
            });
          }
        });
      }
    });
  }, [getFirstname, getGender, getCountry, getAddresses]);
  useEffect(() => {
    getStartingDetailsScreen();
  }, [getStartingDetailsScreen]);
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

  const nextFunc = () => {
    setCurrentScreen((prev) => {
      if (prev == 0) return prev + 1 + startingScreen;
      else return prev + 1;
    });
  };
  const prevFunc = () => {
    setCurrentScreen((prev) => {
      if (prev == startingScreen + 1) return 0;
      else return prev - 1;
    });
  };

  const stateMap = new Map();
  stateMap.set(0, <Symptoms nextFunc={nextFunc} />);
  stateMap.set(
    1,
    <PersonalDetails
      salutation={salutation}
      setSalutation={setSalutation}
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      birthDate={birthDate}
      setBirthDate={setBirthDate}
      prevFunc={prevFunc}
      nextFunc={nextFunc}
    />
  );
  stateMap.set(
    2,
    <GenderScreen
      gender={gender}
      setGender={setGender}
      nextFunc={nextFunc}
      prevFunc={prevFunc}
    />
  );
  stateMap.set(
    3,
    <NationalityScreen
      country={country}
      setCountry={setCountry}
      idValue={idValue}
      setIdValue={setIdValue}
      nextFunc={nextFunc}
      prevFunc={prevFunc}
      selectedIdType={selectedIdType}
      setSelectedIdType={setSelectedIdType}
    />
  );
  stateMap.set(
    4,
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
  );
  stateMap.set(
    5,
    <AllergiesScreen
      drugAllergy={drugAllergy}
      setDrugAllergy={setDrugAllergy}
      foodAllergy={foodAllergy}
      setFoodAllergy={setFoodAllergy}
      nextFunc={nextFunc}
      prevFunc={prevFunc}
    />
  );
  stateMap.set(
    6,
    <MedicalsScreen
      medicalHistory={medicalHistory}
      setMedicalHistory={setMedicalHistory}
      currentMedications={currentMedications}
      setCurrentMedications={setCurrentMedications}
      nextFunc={nextFunc}
      prevFunc={prevFunc}
    />
  );
  stateMap.set(
    7,
    <KinDetailsScreen
      firstNameOfKin={firstNameOfKin}
      setFirstNameOfKin={setFirstNameOfKin}
      setLastNameOfKin={setLastNameOfKin}
      lastNameOfKin={lastNameOfKin}
      phoneOfKin={phoneOfKin}
      setPhoneOfKin={setPhoneOfKin}
      relationshipOfKin={relationshipOfKin}
      setRelationshipOfKin={setRelationshipOfKin}
      prevFunc={prevFunc}
      nextFunc={nextFunc}
    />
  );
  stateMap.set(8, <Records prevFunc={prevFunc} nextFunc={nextFunc} />);

  stateMap.set(9, <Summary />);

  const renderState = () => {
    return stateMap.get(currentScreen);
  };

  return (
    <IonPage>
      <BlankHeader />
      <IonContent>
        <Container>{renderState()}</Container>
      </IonContent>
    </IonPage>
  );
};

export default PreAppointmentPage;
