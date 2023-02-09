import { useState, useEffect, useCallback } from "react";
import PersonalDetails from "./PersonalDetails";
import EditPersonalDetails from "./EditPersonalDetails";
import FloaterButton from "./FloaterButton";

import useLocalDetails from "../../../lib/hooks/useLocalDetails";
import { Storage } from "@capacitor/storage";

import useValidation from "../../../lib/hooks/useValidation";

interface PersonalProfileProps {
  isEdit: boolean;
  toggleEdit: () => void;
}

export const PersonalProfile = ({
  isEdit,
  toggleEdit,
}: PersonalProfileProps) => {
  const {
    getFirstname,
    getLastname,
    getGender,
    getCountry,
    getDob,
    getAddresses,
    getIdentities,
    getContacts,
  } = useLocalDetails();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Date>(new Date());
  const [address, setAddress] = useState<string>("");
  const [unitNo, setUnitNo] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [selectedIdType, setSelectedIdType] = useState("NRIC");
  const [idValue, setIdValue] = useState<string>("");

  const {
    validateOnlyLetters,
    validateEmail,
    validatePhone,
    validateNRIC,
    validateFIN,
    validatePassport,
    validatePostal,
  } = useValidation();
  const [showValidateError, setShowValidateError] = useState(false);

  const initialiseValues = useCallback(() => {
    getFirstname().then((value) => setFirstName(value));
    getLastname().then((value) => setLastName(value));
    getGender().then((value) => setGender(value));
    getCountry().then((value) => setCountry(value));
    getDob().then((value) => setBirthDate(new Date(value)));
    getAddresses().then((value) => {
      setAddress(value[0].location);
      setUnitNo(value[0].unitNo);
      setPostalCode(value[0].postalCode);
    });
    getIdentities().then((value) => {
      setSelectedIdType(value[0].type);
      setIdValue(value[0].value);
    });
    getContacts().then((value) => {
      setContact(value[0].phone);
      setEmail(value[0].email);
    });
  }, [
    getAddresses,
    getContacts,
    getCountry,
    getDob,
    getFirstname,
    getGender,
    getIdentities,
    getLastname,
  ]);

  useEffect(() => {
    initialiseValues();
  }, [initialiseValues]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "unitNo") {
      setUnitNo(value);
    } else if (name === "postalCode") {
      setPostalCode(value);
    } else if (name === "idValue") {
      setIdValue(value);
    } else if (name === "contact") {
      setContact(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const saveData = async () => {
    await Storage.set({
      key: "firstName",
      value: firstName,
    });
    await Storage.set({
      key: "lastName",
      value: lastName,
    });
    await Storage.set({
      key: "gender",
      value: gender,
    });
    await Storage.set({
      key: "country",
      value: country,
    });
    await Storage.set({
      key: "dateOfBirth",
      value: birthDate.toUTCString(),
    });
    await Storage.set({
      key: "addresses",
      value: JSON.stringify([
        { location: address, unitNo: unitNo, postalCode: postalCode },
      ]),
    });
    await Storage.set({
      key: "identities",
      value: JSON.stringify([{ type: selectedIdType, value: idValue }]),
    });
    await Storage.set({
      key: "contacts",
      value: JSON.stringify([{ phone: contact, email: email }]),
    });
  };

  const validateFields = () => {
    if (
      validateOnlyLetters(firstName) &&
      validateOnlyLetters(lastName) &&
      validateEmail(email) &&
      validatePhone(contact) &&
      validatePostal(postalCode) &&
      validateNRIC(idValue) &&
      validateFIN(idValue) &&
      validatePassport(idValue)
    ) {
      setShowValidateError(false);
      return true;
    } else {
      setShowValidateError(true);
      return false;
    }
  };

  const handleSave = () => {
    if (validateFields()) {
      console.log("Saving...");
      saveData();
      toggleEdit();
    } else {
      console.log("Validation failed");
    }
  };

  const handleCancel = () => {
    initialiseValues();
    toggleEdit();
  };

  return (
    <div>
      {!isEdit ? (
        <PersonalDetails
          firstName={firstName}
          lastName={lastName}
          gender={gender}
          contact={contact}
          email={email}
          country={country}
          birthDate={birthDate}
          address={address}
          unitNo={unitNo}
          postalCode={postalCode}
          selectedIdType={selectedIdType}
          idValue={idValue}
        />
      ) : (
        <EditPersonalDetails
          firstName={firstName}
          lastName={lastName}
          gender={gender}
          setGender={setGender}
          contact={contact}
          email={email}
          country={country}
          setCountry={setCountry}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          address={address}
          unitNo={unitNo}
          postalCode={postalCode}
          selectedIdType={selectedIdType}
          setSelectedIdType={setSelectedIdType}
          idValue={idValue}
          handleChange={handleChange}
          showError={showValidateError}
          validateOnlyLetters={validateOnlyLetters}
          validateEmail={validateEmail}
          validatePhone={validatePhone}
          validateNRIC={validateNRIC}
          validateFIN={validateFIN}
          validatePassport={validatePassport}
          validatePostal={validatePostal}
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
