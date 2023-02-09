import { currencyFormatter } from "../../../lib/helper/currency";
import { Button } from "../core/Buttons";
import IncludedServices from "./IncludedServices";
import OptionalServices from "./OptionalServices";
import CheckoutBottomNavbar from "../layouts/CheckoutBottomNavbar";
import { SubHeadingText, RegularText, MediumText } from "../core/Text";
import { SelectedPackage } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

const PackDetails = ({
  healthPackage,
  totalPrice,
  handleOptional,
  optionals,
}) => {
  const history = useHistory();

  const getGender = () => {
    if (healthPackage?.gender === "men") {
      return "men";
    }
    if (healthPackage?.gender === "women") {
      return "women";
    } else {
      return "both men and women";
    }
  };

  const [selectedPackage, setSelectedPackage] = useRecoilState(SelectedPackage);

  // const getAgeGroup = () => {
  //   if (healthPackage?.ageGroup === "under-40") {
  //     return " under 40";
  //   }
  //   if (healthPackage?.ageGroup === "over-40") {
  //     return " over 40";
  //   }
  // };

  const handleOptionalClick = (benefit) => {
    if (healthPackage.price != undefined || healthPackage.price != null) {
      handleOptional(benefit);
    }
  };

  const savePackageData = () => {
    setSelectedPackage({
      name: healthPackage?.name,
      imageURL: healthPackage?.imageURL,
      packagePrice: healthPackage?.price?.amount,
      totalPrice,
      description: healthPackage?.description,
      optionals: optionals,
    });
    history.push("/package-summary");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="lg:hidden my-6">
        <SubHeadingText classes="font-title">
          {healthPackage?.name}
        </SubHeadingText>
        <MediumText classes="text-sm">Ideal for {getGender()}</MediumText>
      </div>
      <div className="lg:w-3/5">
        <div className="hidden lg:block mb-8">
          <div className="text-3xl font-semibold">{healthPackage?.name}</div>
          <div className="text-lg">Ideal for {getGender()}</div>
        </div>
        {/* included services */}
        <IncludedServices healthPackage={healthPackage} />
        {/* optional services */}
        <OptionalServices
          handleOptionalClick={handleOptionalClick}
          healthPackage={healthPackage}
          optionals={optionals}
        />
      </div>
      {healthPackage?.price == undefined || healthPackage?.price == null ? (
        <div className="w-full lg:w-2/5 p-8 card shadow-xl min-h-96 h-max my-8 lg:sticky lg:top-28 bg-white rounded-lg overflow-hidden">
          <SubHeadingText classes="font-semibold">Your package</SubHeadingText>
          <RegularText classes="font-medium">{healthPackage?.name}</RegularText>
          <div className="my-4">
            If you are interested in booking this package, please contact us. We
            will get back to you shortly.
          </div>
          <Button handleClick={() => console.log("Contact Us")} hover>
            Contact Us
          </Button>
        </div>
      ) : (
        <div className="w-full lg:w-2/5 pt-8 card shadow-xl min-h-96 h-max my-8 lg:sticky lg:top-28 bg-white rounded-lg overflow-hidden">
          <SubHeadingText classes="font-title font-semibold px-8">
            Your package
          </SubHeadingText>
          <RegularText classes="px-8">{healthPackage?.name}</RegularText>
          <div className="flex justify-between pt-4 items-center italic px-8">
            <MediumText>Package</MediumText>
            <MediumText classes="font-semibold">
              {healthPackage?.discountedPrice
                ? currencyFormatter(healthPackage?.discountedPrice.amount)
                : currencyFormatter(healthPackage?.price?.amount)}
            </MediumText>
          </div>
          <div className="text-lg font-title py-4 px-8">Optionals</div>
          {optionals?.length > 0 ? (
            optionals.map((optional) => (
              <div
                className="flex justify-between italic px-8"
                key={optional.id}
              >
                <MediumText classes="mr-12 mb-1">{optional.name}</MediumText>
                <MediumText classes="font-semibold">
                  {currencyFormatter(optional.price.amount)}
                </MediumText>
              </div>
            ))
          ) : (
            <RegularText classes="px-8">No optionals selected</RegularText>
          )}
          <div className="px-8 bg-secondary-100 flex justify-between text-lg py-6 mt-4 border-t-4 border-gray-500">
            <RegularText classes="font-title">Total</RegularText>
            <RegularText classes="font-medium">
              {totalPrice === null
                ? healthPackage?.discountedPrice
                  ? currencyFormatter(healthPackage?.discountedPrice.amount)
                  : currencyFormatter(healthPackage?.price?.amount)
                : currencyFormatter(totalPrice)}
            </RegularText>
          </div>
        </div>
      )}
      {healthPackage?.price != undefined && healthPackage?.price != null && (
        <CheckoutBottomNavbar
          totalPrice={
            totalPrice === null
              ? healthPackage?.discountedPrice
                ? currencyFormatter(healthPackage?.discountedPrice.amount)
                : currencyFormatter(healthPackage?.price?.amount)
              : currencyFormatter(totalPrice)
          }
          optionals={optionals}
          handleClick={savePackageData}
        />
      )}
    </div>
  );
};

export default PackDetails;
