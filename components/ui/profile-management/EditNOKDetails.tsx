import { EditInformationField } from "./EditInformationField";

interface EditNOKDetailsProps {
  nameOfKin: string;
  phoneOfKin: string;
  relationshipOfKin: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showError?: boolean;
  validateOnlyLetters?: (value: string | number | boolean) => boolean;
  validatePhone?: (value: string | number | boolean) => boolean;
}

const EditNOKDetails = ({
  nameOfKin,
  phoneOfKin,
  relationshipOfKin,
  handleChange,
  showError,
  validateOnlyLetters,
  validatePhone,
}: EditNOKDetailsProps) => {
  return (
    <div className="flex flex-col mt-6">
      <form>
        <EditInformationField
          label="Next of Kin"
          type="text"
          name="nameOfKin"
          value={nameOfKin}
          method={handleChange}
          validateFunction={validateOnlyLetters}
          showError={showError}
          errorText="Please enter a valid name"
        />
        <EditInformationField
          label="Relationship with User"
          type="text"
          name="relationshipOfKin"
          value={relationshipOfKin}
          method={handleChange}
          validateFunction={validateOnlyLetters}
          showError={showError}
          errorText="Please enter a valid relationship"
        />
        <EditInformationField
          label="Contact Number"
          type="number"
          name="phoneOfKin"
          value={phoneOfKin}
          method={handleChange}
          validateFunction={validatePhone}
          showError={showError}
          errorText="Please enter a valid contact number"
        />
      </form>
    </div>
  );
};

export default EditNOKDetails;
