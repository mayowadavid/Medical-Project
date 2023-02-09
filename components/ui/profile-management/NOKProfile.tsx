import { useState, useEffect, useCallback } from "react";
import FloaterButton from "./FloaterButton";

import NOKDetails from "./NOKDetails";
import EditNOKDetails from "./EditNOKDetails";

import useLocalDetails from "../../../lib/hooks/useLocalDetails";
import { Storage } from "@capacitor/storage";

import useValidation from "../../../lib/hooks/useValidation";

interface NOKProfileProps {
  isEdit: boolean;
  toggleEdit: () => void;
}

export const NOKProfile = ({ isEdit, toggleEdit }: NOKProfileProps) => {
  const { getNokDetails } = useLocalDetails();

  const [nameOfKin, setNameOfKin] = useState<string>("");
  const [phoneOfKin, setPhoneOfKin] = useState<string>("");
  const [relationshipOfKin, setRelationshipOfKin] = useState<string>("");

  const { validateOnlyLetters, validatePhone } = useValidation();
  const [showValidateError, setShowValidateError] = useState(false);

  const initialiseValues = useCallback(async () => {
    getNokDetails().then((value) => {
      setNameOfKin(value.name);
      setPhoneOfKin(value.phone[0].value);
      setRelationshipOfKin(value.relationship);
    });
  }, [getNokDetails]);

  useEffect(() => {
    initialiseValues();
  }, [initialiseValues]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name === "nameOfKin") {
      setNameOfKin(value);
    } else if (name === "phoneOfKin") {
      setPhoneOfKin(value);
    } else if (name === "relationshipOfKin") {
      setRelationshipOfKin(value);
    }
  };

  const saveData = async () => {
    const nokDetails = {
      name: nameOfKin,
      phone: [{ value: phoneOfKin }],
      relationship: relationshipOfKin,
    };
    await Storage.set({ key: "nokDetails", value: JSON.stringify(nokDetails) });
  };

  const validateFields = () => {
    if (
      validateOnlyLetters(nameOfKin) &&
      validatePhone(phoneOfKin) &&
      validateOnlyLetters(relationshipOfKin)
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
      console.log("Saving data");
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
        <NOKDetails
          nameOfKin={nameOfKin}
          phoneOfKin={phoneOfKin}
          relationshipOfKin={relationshipOfKin}
        />
      ) : (
        <EditNOKDetails
          nameOfKin={nameOfKin}
          phoneOfKin={phoneOfKin}
          relationshipOfKin={relationshipOfKin}
          handleChange={handleChange}
          showError={showValidateError}
          validateOnlyLetters={validateOnlyLetters}
          validatePhone={validatePhone}
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
