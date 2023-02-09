import { Button } from "../../core/Buttons";
import FormInput from "../../core/FormInput";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";
import useValidation from "../../../../lib/hooks/useValidation";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useLocalDetails from "../../../../lib/hooks/useLocalDetails";
import FormDropdown from "../../core/FormDropdown";
import { Urql } from "../../../../urql/urql";
import { getLinkTypes } from "../../../../urql/queries/linkTypes";
interface KinDetailsScreenProps {
  firstNameOfKin: string;
  lastNameOfKin: string;
  setFirstNameOfKin: Dispatch<SetStateAction<string>>;
  setLastNameOfKin: Dispatch<SetStateAction<string>>;
  relationshipOfKin: string;
  setRelationshipOfKin: Dispatch<SetStateAction<string>>;
  phoneOfKin: string;
  setPhoneOfKin: Dispatch<SetStateAction<string>>;
  nextFunc?: () => void;
  prevFunc?: () => void;
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const KinDetailsScreen = ({
  firstNameOfKin,
  lastNameOfKin,
  setFirstNameOfKin,
  setLastNameOfKin,
  phoneOfKin,
  setPhoneOfKin,
  relationshipOfKin,
  setRelationshipOfKin,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
}: KinDetailsScreenProps) => {
  const history = useHistory();
  const { setKinDetails } = useLocalDetails();
  const { validatePhone, validateOnlyLetters } = useValidation();
  const [showValidateError, setShowValidateError] = useState(false);
  const [showRelationshipDropdown, setShowRelationshipDropdown] =
    useState(false);
  const [linkOptions, setLinkOptions] = useState([]);
  const validateFields = () => {
    console.log("Validating...");
    if (
      validatePhone(phoneOfKin) &&
      validateOnlyLetters(firstNameOfKin) &&
      validateOnlyLetters(lastNameOfKin)
    )
      setShowValidateError(false);
    else setShowValidateError(true);
    return (
      validatePhone(phoneOfKin) &&
      validateOnlyLetters(firstNameOfKin) &&
      validateOnlyLetters(lastNameOfKin)
    );
  };
  useEffect(() => {
    Urql.query(getLinkTypes).then((res) => {
      if (res.error) setLinkOptions(["Relationship to patient"]);
      else if (res?.data?.listLinkTypes?.items?.length) {
        setLinkOptions(res?.data?.listLinkTypes?.items);
        setRelationshipOfKin(res?.data?.listLinkTypes?.items[0]);
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-12 mb-8 w-full">
          <img
            src="/onboarding/nok_screen.svg"
            alt="NOK Image"
            className="w-full"
          />
        </div>
        <div className="text-xl font-medium mt-6 mb-2">Next Of Kin Details</div>
        <div className="p-1 font-medium">First Name</div>
        <div className="p-1">
          <FormInput
            inputState={firstNameOfKin}
            setInputState={setFirstNameOfKin}
            placeholder="Name of NOK"
            showError={showValidateError}
            errorText="Enter a valid name!"
            validateFunction={validateOnlyLetters}
          />
        </div>
        <div className="p-1 font-medium">Last Name</div>
        <div className="p-1">
          <FormInput
            inputState={lastNameOfKin}
            setInputState={setLastNameOfKin}
            placeholder="Last name"
            showError={showValidateError}
            errorText="Enter a valid last name!"
            validateFunction={validateOnlyLetters}
          />
        </div>
        <div className="p-1 font-medium">Phone Number</div>
        <div className="p-1">
          <FormInput
            inputType="number"
            inputState={phoneOfKin}
            setInputState={setPhoneOfKin}
            placeholder="Phone no. of NOK"
            showError={showValidateError}
            errorText="Enter a valid phone number!"
            validateFunction={validatePhone}
          />
        </div>
        <div className="p-1 font-medium">Relationship With User</div>
        <div>
          <FormDropdown
            dropdownMenuOpen={showRelationshipDropdown}
            setDropdownMenuOpen={setShowRelationshipDropdown}
            dropdownValue={relationshipOfKin}
            setDropdownValue={setRelationshipOfKin}
            options={linkOptions}
            containerClasses="w-full"
            relationshipDropdown
          />
        </div>
      </div>
      <Floater classes="!bg-transparent !border-none">
        {prevFunc && (
          <Button
            href={prevHref}
            handleClick={() => prevFunc()}
            classes="py-3 rounded-lg mr-3 !bg-blue-400 flex items-center justify-center"
            full
          >
            <HiArrowNarrowLeft size="20px" className="text-white mr-2" />
            {customPrevBtnText ? customPrevBtnText : "Prev"}
          </Button>
        )}
        {nextFunc && (
          <Button
            handleClick={() => {
              // if btn is not disabled
              if (
                firstNameOfKin != "" &&
                lastNameOfKin != "" &&
                relationshipOfKin != "" &&
                phoneOfKin != ""
              ) {
                if (validateFields()) {
                  setKinDetails(
                    firstNameOfKin,
                    lastNameOfKin,
                    phoneOfKin,
                    relationshipOfKin
                  );
                  nextFunc();
                  history.push(nextHref);
                } else {
                  console.log("Invalid");
                }
              } else {
                //No kin details entered
                setKinDetails(
                  firstNameOfKin,
                  lastNameOfKin,
                  phoneOfKin,
                  relationshipOfKin
                );
                nextFunc();
                history.push(nextHref);
              }
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
            disabled={
              (firstNameOfKin != "" ||
                lastNameOfKin != "" ||
                relationshipOfKin != "" ||
                phoneOfKin != "") &&
              !(
                firstNameOfKin != "" &&
                lastNameOfKin != "" &&
                relationshipOfKin != "" &&
                phoneOfKin != ""
              )
            }
          >
            {customNextBtnText ? customNextBtnText : "Next"}
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </Floater>
    </div>
  );
};

export default KinDetailsScreen;
