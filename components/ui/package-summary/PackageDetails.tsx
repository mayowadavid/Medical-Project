import { Card } from "../core/Card";
import { MediumText, SmallText } from "../core/Text";
import AddedServices from "../order/AddedServices";

interface PackageProps {
  imageURL: string;
  name: string;
  packagePrice: any;
  totalPrice: any;
  description: string;
  optionals?: string[];
}

interface PackageDetailsProps {
  pack: PackageProps;
}

const PackageDetails = ({ pack }: PackageDetailsProps) => {
  return (
    <Card classes="flex flex-col w-full items-center justify-center">
      <div className="flex flex-row items-center justify-center">
        <img
          src={pack.imageURL}
          alt={pack.name}
          width={64}
          height={64}
          className="object-cover w-20 h-28 rounded-l-md"
        />
        <div className="flex flex-col w-4/5 items-start px-3">
          <MediumText classes="text-lg font-bold font-title text-primary-100">
            {pack.name}
          </MediumText>
          <SmallText classes="mt-1 font-general text-slate-700">
            {pack.description}
          </SmallText>
          <div className="flex flex-row w-full justify-end items-center">
            <MediumText classes="mt-1 font-general font-semibold text-slate-700">
              S${pack.packagePrice}
            </MediumText>
          </div>
        </div>
      </div>
      <AddedServices pack={pack} items={pack.optionals} />
    </Card>
  );
};

export default PackageDetails;
