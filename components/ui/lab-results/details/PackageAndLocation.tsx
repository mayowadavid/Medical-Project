import { Card } from "../../core/Card";
import {
  FadedMediumText,
  MediumText,
  RegularText,
  SmallText,
} from "../../core/Text";

interface PackageAndLocationProps {
  medicalRecord: any;
}

const PackageAndLocation = ({ medicalRecord }: PackageAndLocationProps) => {
  return (
    <Card
      classes={"flex justify-center flex-col items-center px-4 py-3 rounded-lg"}
    >
      <div className="flex items-center space-x-2">
        <div className="rounded-full p-1.5 border bg-slate-50">
          <img
            src={`/icons/${
              medicalRecord?.type === "lab-test"
                ? "lab"
                : medicalRecord?.type === "radiology"
                ? "record"
                : medicalRecord?.type === "immunization"
                ? "syringe"
                : "shield-plus"
            }.png`}
            alt={medicalRecord?.type}
            width={25}
            height={25}
          />
        </div>
        <RegularText classes={"font-semibold font-title"}>
          {medicalRecord?.testName}
        </RegularText>
      </div>
      <FadedMediumText>at</FadedMediumText>
      <MediumText classes={"font-semibold text-center font-title"}>
        {medicalRecord?.clinic}
      </MediumText>
      <SmallText classes={"text-center"}>{medicalRecord?.location}</SmallText>
    </Card>
  );
};

export default PackageAndLocation;
