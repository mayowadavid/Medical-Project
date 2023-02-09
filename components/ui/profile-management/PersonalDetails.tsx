import { MediumText, RegularText } from "../core/Text";
import { ViewInformationField } from "./ViewInformationField";

interface PersonalDetailsProps {
  firstName: string;
  lastName: string;
  gender: string;
  contact: string;
  email: string;
  country: string;
  birthDate: Date;
  address: string;
  unitNo: string;
  postalCode: string;
  selectedIdType: string;
  idValue: string;
}

const PersonalDetails = ({
  firstName,
  lastName,
  gender,
  contact,
  email,
  country,
  birthDate,
  address,
  unitNo,
  postalCode,
  selectedIdType,
  idValue,
}: PersonalDetailsProps) => {
  return (
    <div className="flex flex-col mt-6 mb-28">
      <div className="flex flex-row items-center px-2">
        <div className="flex w-full items-center justify-between border-b border-slate-300">
          <div className="flex flex-col items-start justify-center">
            <MediumText classes="font-general mb-1">Name</MediumText>
            <RegularText classes="font-general">
              {firstName} {lastName}
            </RegularText>
          </div>
          <div className="flex justify-end">
            <img
              src="/assets/images/profile/profile.png"
              alt="profile"
              className="w-16 h-16 object-cover rounded-half"
            />
          </div>
        </div>
      </div>
      <ViewInformationField label="Gender" value={gender} />
      <ViewInformationField label="Contact No." value={contact} />
      <ViewInformationField label="Email" value={email} />
      <ViewInformationField label="Country" value={country} />
      <ViewInformationField
        label="Date of Birth"
        value={`${
          birthDate.getMonth() + 1
        }/${birthDate.getDate()}/${birthDate.getFullYear()}`}
      />
      <ViewInformationField label="Unit No" value={unitNo} />
      <ViewInformationField label="Address" value={address} />
      <ViewInformationField label="Postal Code" value={postalCode} />
      <ViewInformationField label="ID Type" value={selectedIdType} />
      <ViewInformationField label="ID No." value={idValue} />
    </div>
  );
};

export default PersonalDetails;
