import {
  useState,
  forwardRef,
  Dispatch,
  SetStateAction,
  LegacyRef,
  useEffect,
} from "react";
import { Button } from "../../core/Buttons";
import FormInput from "../../core/FormInput";
import FormDropdown from "../../core/FormDropdown";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { SmallText } from "../../core/Text";
import { BsCalendarEvent } from "react-icons/bs";
import DatePicker from "react-datepicker";
import Floater from "../../core/Floater";
import useValidation from "../../../../lib/hooks/useValidation";
import useLocalDetails from "../../../../lib/hooks/useLocalDetails";
import { Storage } from "@capacitor/storage";
import { useHistory } from "react-router-dom";
import {
  getEntityByIdQueryOnlyJson,
  updateEntityJsonMutation,
} from "../../../../urql/mutations/profile";
import { Urql } from "../../../../urql/urql";
import { toast } from "react-toastify";
interface PersonalDetailsProps {
  salutation: string;
  setSalutation: Dispatch<SetStateAction<string>>;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  birthDate: Date;
  setBirthDate: Dispatch<SetStateAction<Date>>;
  nextFunc?: () => void;
  prevFunc?: () => void;
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const PersonalDetails = ({
  salutation,
  setSalutation,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  birthDate,
  setBirthDate,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
}: PersonalDetailsProps) => {
  const history = useHistory();
  const { validateOnlyLetters } = useValidation();
  const { setProfileDetails } = useLocalDetails();
  const [showSalutationDropdown, setShowSalutationDropdown] = useState(false);
  const [showValidateError, setShowValidateError] = useState(false);
  const [entityId, setEntityId] = useState();
  useEffect(() => {
    const fetchEntityId = async () => {
      const { value: userData } = await Storage.get({
        key: "loggedUser",
      });
      if (userData && JSON.parse(userData).length > 0) {
        const user = JSON.parse(userData)[0];
        setEntityId(user.entity.id);
      }
    };
    fetchEntityId();
  }, []);
  const isValidBirthdate = (date) => {
    if (date <= new Date()) {
      return true;
    } else return false;
  };
  const validateFields = () => {
    console.log("Validating...");
    if (validateOnlyLetters(firstName) && validateOnlyLetters(lastName))
      setShowValidateError(false);
    else setShowValidateError(true);
    return validateOnlyLetters(firstName) && validateOnlyLetters(lastName);
  };
  const DateCustomInput = forwardRef(function DateCustomInput(
    { value, onClick }: any,
    ref: LegacyRef<HTMLDivElement>
  ) {
    return (
      <div onClick={onClick} ref={ref}>
        <div className="flex flex-col items-center justify-center shadow px-4 py-3 w-max rounded-lg border">
          <SmallText classes="flex flex-col items-center justify-center">
            <BsCalendarEvent size="20px" />
          </SmallText>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-12">
          <img
            src="/onboarding/personal_screen.svg"
            alt="Welcome Image"
            className="w-full"
          />
        </div>
        <div className="p-1 font-medium">First Name</div>
        <div className="flex items-start">
          <FormDropdown
            dropdownMenuOpen={showSalutationDropdown}
            setDropdownMenuOpen={setShowSalutationDropdown}
            dropdownValue={salutation}
            setDropdownValue={setSalutation}
            options={["Mr", "Miss", "Mdm", "Mrs"]}
            containerClasses="w-1/3"
          />
          <div className="p-1 w-2/3">
            <FormInput
              inputState={firstName}
              setInputState={setFirstName}
              placeholder="First name"
              showError={showValidateError}
              errorText="Enter a valid first name!"
              validateFunction={validateOnlyLetters}
            />
          </div>
        </div>
        <div className="p-1 font-medium">Last Name</div>
        <div className="p-1">
          <FormInput
            inputState={lastName}
            setInputState={setLastName}
            placeholder="Last name"
            showError={showValidateError}
            errorText="Enter a valid last name!"
            validateFunction={validateOnlyLetters}
          />
        </div>
        <div className="p-1 font-medium">Date Of Birth</div>
        <div className="flex items-center">
          <div className="pr-2 grow">
            <div className="w-full shadow-inner px-4 py-2.5 rounded-lg border border-back text-light text-base outline-none">
              {`${
                birthDate.getMonth() + 1
              } / ${birthDate.getDate()} / ${birthDate.getFullYear()}`}
            </div>
          </div>
          <DatePicker
            customInput={<DateCustomInput />}
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            wrapperClassName="!w-auto"
            filterDate={isValidBirthdate}
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={100}
            scrollableYearDropdown
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
            href={nextHref}
            handleClick={async () => {
              if (validateFields()) {
                console.log("Valid!");
                // update entity in backend
                Urql.query(getEntityByIdQueryOnlyJson, {
                  id: entityId,
                }).then((res) => {
                  if (res.error) {
                    toast.error(res.error.message, {
                      position: "bottom-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  } else {
                    const eData = res?.data;
                    // update entity in backend
                    if (entityId && eData) {
                      const jsonData = JSON.parse(
                        eData.getEntityById.valueAsJsonString
                      );
                      const updateEntityInfo = {
                        entityId: entityId,
                        valueAsJsonString: JSON.stringify({
                          ...jsonData,
                          salutation: salutation,
                          firstName: firstName,
                          lastName: lastName,
                          birthDate: birthDate,
                        }),
                      };
                      Urql.mutation(
                        updateEntityJsonMutation,
                        updateEntityInfo
                      ).then((res) => {
                        if (res.error) {
                          toast.error(res.error.message, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                        } else {
                          if (res?.data?.updateEntity?.valueAsJsonString) {
                            // getEntityDetails back from mutation
                            // update local storage
                            const jsonObj = JSON.parse(
                              res?.data.updateEntity.valueAsJsonString
                            );
                            setProfileDetails(
                              jsonObj.salutation,
                              jsonObj.firstName,
                              jsonObj.lastName,
                              jsonObj.birthDate
                            );
                            nextFunc();
                          }
                        }
                      });
                    } else {
                      // no user logged in
                      history.replace("/");
                    }
                  }
                });
              } else console.log("Invalid");
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
            disabled={
              firstName == "" || lastName == "" || birthDate == undefined
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

export default PersonalDetails;
