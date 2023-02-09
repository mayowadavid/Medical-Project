import { Storage } from "@capacitor/storage";
import { useCallback } from "react";
import { getIdentifierKey } from "../helper/identitifiers";
const useLocalDetails = () => {
  const getSalutation = useCallback(async () => {
    const { value } = await Storage.get({ key: "salutation" });
    return value == null ? "Mr" : value;
  }, []);
  const getFirstname = useCallback(async () => {
    const { value } = await Storage.get({ key: "firstName" });
    return value == null ? "" : value;
  }, []);
  const getLastname = useCallback(async () => {
    const { value } = await Storage.get({ key: "lastName" });
    return value == null ? "" : value;
  }, []);
  const getDob = useCallback(async () => {
    const { value } = await Storage.get({ key: "birthDate" });
    return value == null ? new Date() : value;
  }, []);
  const setProfileDetails = useCallback(
    async (salutation, firstName, lastName, birthDate) => {
      await Storage.set({
        key: "salutation",
        value: salutation,
      });
      await Storage.set({
        key: "firstName",
        value: firstName,
      });
      await Storage.set({
        key: "lastName",
        value: lastName,
      });
      await Storage.set({
        key: "birthDate",
        value: birthDate,
      });
      const { value: l_salutation } = await Storage.get({ key: "salutation" });
      const { value: l_firstName } = await Storage.get({ key: "firstName" });
      const { value: l_lastName } = await Storage.get({ key: "lastName" });
      const { value: l_birthDate } = await Storage.get({
        key: "birthDate",
      });
      console.log("Salutation : ", l_salutation);
      console.log("Firstname : ", l_firstName);
      console.log("Lastname : ", l_lastName);
      console.log("DOB : ", new Date(l_birthDate));
    },
    []
  );
  const getGender = useCallback(async () => {
    const { value } = await Storage.get({ key: "gender" });
    return value == null ? "" : value;
  }, []);
  const setGenderDetails = useCallback(async (gender) => {
    await Storage.set({
      key: "gender",
      value: gender,
    });
    const { value: l_gender } = await Storage.get({ key: "gender" });
    console.log("Gender : ", l_gender);
  }, []);
  const getCountry = useCallback(async () => {
    const { value } = await Storage.get({ key: "addresses" });
    if (value != null) {
      const country = JSON.parse(value);
      if (
        country
          ?.find((x) => x.key == "Address")
          ?.fields?.find((x) => x.key == "country")
      )
        return country
          .find((x) => x.key == "Address")
          .fields.find((x) => x.key == "country").value;
      else return "Select country";
    } else return "Select country";
  }, []);
  const getIdentities = useCallback(async () => {
    const { value } = await Storage.get({ key: "identifiers" });
    return value == null ? [] : JSON.parse(value);
  }, []);
  const setIdentityDetails = useCallback(async (identifiers) => {
    await Storage.set({
      key: "identifiers",
      value: JSON.stringify(identifiers),
    });
  }, []);
  const getIdentitiesFromType = useCallback(async (type) => {
    const { value } = await Storage.get({ key: "identifiers" });
    return value != null &&
      JSON.parse(value)?.find((id) => id.key == getIdentifierKey[type])
      ? JSON.parse(value).find((id) => id.key == getIdentifierKey[type])
      : {
          key: type,
          value: "",
        };
  }, []);
  const getAddresses = useCallback(async () => {
    const { value } = await Storage.get({ key: "addresses" });
    return value == null ? [] : JSON.parse(value);
  }, []);
  const setAddressDetails = useCallback(async (addresses) => {
    await Storage.set({
      key: "addresses",
      value: JSON.stringify(addresses),
    });
  }, []);
  const getContacts = useCallback(async () => {
    const { value } = await Storage.get({ key: "contacts" });
    return value == null
      ? [
          {
            phone: "",
            email: "",
          },
        ]
      : JSON.parse(value);
  }, []);
  const setContactDetails = useCallback(async (contacts) => {
    await Storage.set({
      key: "contacts",
      value: JSON.stringify(contacts),
    });
  }, []);
  const getAllergies = useCallback(async () => {
    const { value } = await Storage.get({ key: "allergies" });
    return value == null ? null : JSON.parse(value);
  }, []);
  const setAllergyDetails = useCallback(async (allergies) => {
    await Storage.set({
      key: "allergies",
      value: JSON.stringify(allergies),
    });
  }, []);
  const getMedicalHistory = useCallback(async () => {
    const { value } = await Storage.get({ key: "medicalHistory" });
    return value == null ? [] : JSON.parse(value);
  }, []);
  const getCurrentMedications = useCallback(async () => {
    const { value } = await Storage.get({ key: "currentMedication" });
    return value == null ? [] : JSON.parse(value);
  }, []);
  const setMedicalDetails = useCallback(async (medicalHistory) => {
    const { value } = await Storage.get({ key: "medicalHistory" });
    if (value == null) {
      await Storage.set({
        key: "medicalHistory",
        value: JSON.stringify([...medicalHistory]),
      });
    } else {
      const medHistSet = new Set([...JSON.parse(value), ...medicalHistory]);
      await Storage.set({
        key: "medicalHistory",
        value: JSON.stringify(Array.from(medHistSet)),
      });
    }
    const { value: l_medicalHistory } = await Storage.get({
      key: "medicalHistory",
    });
    console.log("Medical History : ", JSON.parse(l_medicalHistory));
  }, []);
  const setCurrMedicationDetails = useCallback(async (currentMedications) => {
    const { value } = await Storage.get({ key: "currentMedication" });
    if (value == null) {
      await Storage.set({
        key: "currentMedication",
        value: JSON.stringify([...currentMedications]),
      });
    } else {
      const currMedSet = new Set([...JSON.parse(value), ...currentMedications]);
      await Storage.set({
        key: "currentMedication",
        value: JSON.stringify(Array.from(currMedSet)),
      });
    }
    const { value: l_currentMedication } = await Storage.get({
      key: "currentMedication",
    });
    console.log("Current Medication : ", JSON.parse(l_currentMedication));
  }, []);
  const getNokDetails = useCallback(async () => {
    const { value } = await Storage.get({ key: "nokDetails" });
    return value == null
      ? {
          firstname: "",
          lastname: "",
          phone: [
            {
              value: "",
            },
          ],
          relationship: "",
        }
      : JSON.parse(value);
  }, []);
  const setKinDetails = useCallback(
    async (firstnameOfKin, lastnameOfKin, phoneOfKin, relationshipOfKin) => {
      const obj = {
        firstname: firstnameOfKin,
        lastname: lastnameOfKin,
        phone: [
          {
            id: 1,
            value: phoneOfKin,
          },
        ],
        relationship: relationshipOfKin,
      };
      await Storage.set({
        key: "nokDetails",
        value: JSON.stringify(obj),
      });
      const { value: l_nok } = await Storage.get({ key: "nokDetails" });
      console.log("NOK details : ", JSON.parse(l_nok));
    },
    []
  );

  const clearLocalDetails = useCallback(async () => {
    await Storage.remove({
      key: "salutation",
    });
    await Storage.remove({
      key: "firstName",
    });
    await Storage.remove({
      key: "lastName",
    });
    await Storage.remove({
      key: "birthDate",
    });
    await Storage.remove({
      key: "nokDetails",
    });
    await Storage.remove({
      key: "gender",
    });
    await Storage.remove({
      key: "allergies",
    });
    await Storage.remove({
      key: "currentMedication",
    });
    await Storage.remove({
      key: "medicalHistory",
    });
    await Storage.remove({
      key: "identifiers",
    });
    await Storage.remove({
      key: "contacts",
    });
    await Storage.remove({
      key: "addresses",
    });
  }, []);
  const getBodyStat = useCallback(async () => {
    const { value } = await Storage.get({ key: "bodyStat" });
    return value == null
      ? {
          height: "",
          weight: "",
          bloodType: "",
        }
      : JSON.parse(value);
  }, []);
  return {
    getAddresses,
    getAllergies,
    getContacts,
    getCountry,
    getCurrentMedications,
    getDob,
    getFirstname,
    getGender,
    getIdentities,
    getIdentitiesFromType,
    getLastname,
    getMedicalHistory,
    getSalutation,
    getNokDetails,
    clearLocalDetails,
    getBodyStat,
    setProfileDetails,
    setAddressDetails,
    setGenderDetails,
    setAllergyDetails,
    setMedicalDetails,
    setCurrMedicationDetails,
    setKinDetails,
    setContactDetails,
    setIdentityDetails,
  };
};

export default useLocalDetails;
