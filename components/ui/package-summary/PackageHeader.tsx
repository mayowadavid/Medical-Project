import { FadedMediumText, SubHeadingText } from "../core/Text";

interface PackageHeaderProps {
  packageName: string;
  description?: string;
}

const PackageHeader = ({ packageName, description }: PackageHeaderProps) => {
  return (
    <div className="my-6">
      <SubHeadingText>{packageName}</SubHeadingText>
      <FadedMediumText>{description}</FadedMediumText>
    </div>
  );
};

export default PackageHeader;
