import { SmallText, MediumText } from "../core/Text";
import { EditInformationField } from "./EditInformationField";
import { EditSelectInfoField } from "./EditSelectInfoField";
import { allCountries } from "country-region-data";
import DatePicker from "react-datepicker";
import { BsCalendarEvent } from "react-icons/bs";
import {
  forwardRef,
  Dispatch,
  SetStateAction,
  LegacyRef,
  useState,
} from "react";

interface EditPersonalDetailsProps {
  firstName: string;
  lastName: string;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  contact: string;
  email: string;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  birthDate: Date;
  setBirthDate: Dispatch<SetStateAction<Date>>;
  address: string;
  unitNo: string;
  postalCode: string;
  selectedIdType: string;
  setSelectedIdType: Dispatch<SetStateAction<string>>;
  idValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showError?: boolean;
  validateOnlyLetters?: (value: string | number | boolean) => boolean;
  validateEmail?: (value: string | number | boolean) => boolean;
  validatePhone?: (value: string | number | boolean) => boolean;
  validatePostal?: (value: string | number | boolean) => boolean;
  validateNRIC?: (value: string | number | boolean) => boolean;
  validateFIN?: (value: string | number | boolean) => boolean;
  validatePassport?: (value: string | number | boolean) => boolean;
}

const EditPersonalDetails = ({
  firstName,
  lastName,
  gender,
  setGender,
  contact,
  email,
  country,
  setCountry,
  birthDate,
  setBirthDate,
  address,
  unitNo,
  postalCode,
  selectedIdType,
  setSelectedIdType,
  idValue,
  handleChange,
  showError,
  validateOnlyLetters,
  validateEmail,
  validatePhone,
  validatePostal,
  validateNRIC,
  validateFIN,
  validatePassport,
}: EditPersonalDetailsProps) => {
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showIdTypeDropdown, setShowIdTypeDropdown] = useState(false);

  const getCountryList = () => {
    const countryList = allCountries.map((country) => country[0]);
    return countryList;
  };
  const isValidBirthdate = (date) => {
    if (date <= new Date()) {
      return true;
    } else return false;
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
    <div className="flex flex-col mt-6 mb-28">
      <form>
        <div className="flex flex-col items-center px-1">
          <div className="flex justify-end">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/assets/images/profile/profile.png"
                alt="profile"
                className="w-16 h-16 object-cover rounded-half"
              />
              <SmallText classes="font-general font-bold text-primary-100 mb-2">
                Upload Photo
              </SmallText>
            </div>
          </div>
        </div>
        <EditInformationField
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          method={handleChange}
          validateFunction={validateOnlyLetters}
          showError={showError}
          errorText="Please enter a valid first name"
        />
        <EditInformationField
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          method={handleChange}
          validateFunction={validateOnlyLetters}
          showError={showError}
          errorText="Please enter a valid last name"
        />
        <EditSelectInfoField
          dropdownMenuOpen={showGenderDropdown}
          setDropdownMenuOpen={setShowGenderDropdown}
          label="Gender"
          name="gender"
          value={gender}
          method={setGender}
          options={["male", "female"]}
        />
        <EditInformationField
          label="Contact No."
          type="number"
          name="contact"
          value={contact}
          method={handleChange}
          validateFunction={validatePhone}
          showError={showError}
          errorText="Please enter a valid contact number"
        />
        <EditInformationField
          label="Email"
          type="email"
          name="email"
          value={email}
          method={handleChange}
          validateFunction={validateEmail}
          showError={showError}
          errorText="Please enter a valid email"
        />
        <EditSelectInfoField
          dropdownMenuOpen={showCountryDropdown}
          setDropdownMenuOpen={setShowCountryDropdown}
          label="Country"
          name="country"
          value={country}
          method={setCountry}
          options={getCountryList()}
        />

        <div className="border-b border-slate-300 mb-1 pb-2">
          <div className="p-2">
            <MediumText classes="font-general text-slate-700">
              Date Of Birth
            </MediumText>
          </div>
          <div className="flex items-center px-2">
            <div className="pr-2 grow">
              <div className="w-full shadow-inner px-4 py-2.5 rounded-md bg-slate-100 border-back text-light text-base outline-none">
                <MediumText classes="font-general text-slate-700">
                  {`${
                    birthDate.getMonth() + 1
                  }/${birthDate.getDate()}/${birthDate.getFullYear()}`}
                </MediumText>
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

        <EditInformationField
          label="Unit No."
          type="text"
          name="unitNo"
          value={unitNo}
          method={handleChange}
        />
        <EditInformationField
          label="Address"
          type="text"
          name="address"
          value={address}
          method={handleChange}
        />
        <EditInformationField
          label="Postal"
          type="number"
          name="postalCode"
          value={postalCode}
          method={handleChange}
          validateFunction={validatePostal}
          showError={showError}
          errorText="Please enter a valid postal code"
        />
        <EditSelectInfoField
          dropdownMenuOpen={showIdTypeDropdown}
          setDropdownMenuOpen={setShowIdTypeDropdown}
          label="ID Type"
          name="idType"
          value={selectedIdType}
          method={setSelectedIdType}
          options={["NRIC", "Passport", "FIN"]}
        />
        <EditInformationField
          label="ID No."
          type="text"
          name="idValue"
          value={idValue}
          method={handleChange}
          validateFunction={
            selectedIdType === "NRIC"
              ? validateNRIC
              : selectedIdType === "Passport"
              ? validatePassport
              : selectedIdType === "FIN"
              ? validateFIN
              : null
          }
          showError={showError}
          errorText={`Please enter a valid ${selectedIdType}`}
        />
      </form>
    </div>
  );
};

export default EditPersonalDetails;
