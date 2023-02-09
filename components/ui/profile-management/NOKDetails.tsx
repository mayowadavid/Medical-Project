import { ViewInformationField } from "./ViewInformationField";

interface NOKDetailsProps {
  nameOfKin: string;
  phoneOfKin: string;
  relationshipOfKin: string;
}

const NOKDetails = ({
  nameOfKin,
  phoneOfKin,
  relationshipOfKin,
}: NOKDetailsProps) => {
  return (
    <div className="flex flex-col mt-6 mb-12">
      <ViewInformationField label="Name of Kin" value={nameOfKin} />
      <ViewInformationField
        label="Relationship with User"
        value={relationshipOfKin}
      />
      <ViewInformationField label="Contact Number" value={phoneOfKin} />
    </div>
  );
};

export default NOKDetails;
