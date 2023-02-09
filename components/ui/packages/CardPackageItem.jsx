import { Link } from "react-router-dom";
import { currencyFormatter } from "../../../lib/helper/currency";
import { Button } from "../core/Buttons";
import { Card } from "../core/Card";
import { RegularText, FadedSmallText } from "../core/Text";

const CardPackageItem = ({ healthPackages }) => {
  return (
    <div>
      <RegularText classes="mb-4">
        Result: {healthPackages.length} package(s)
      </RegularText>
      {healthPackages.map((pack) => (
        <Card key={pack.id} classes="flex p-0 my-3 overflow-hidden" hoverEffect>
          <img
            src={pack.imageURL}
            alt="package"
            className="w-24 object-cover"
          />
          <div className="px-3 py-2 flex-1 space-y-3">
            <div>
              <RegularText classes="font-title">{pack.name}</RegularText>
              <FadedSmallText classes="font-general">{`Ideal for ${
                pack.gender === "men"
                  ? "men"
                  : pack.gender === "women"
                  ? "women"
                  : "men & women"
              } 
              `}</FadedSmallText>
              <hr />
            </div>
            <div>
              <RegularText classes="font-general">{`Includes ${pack.services.length} services`}</RegularText>
              {pack.optionalServices.length > 0 && (
                <FadedSmallText
                  classes={
                    "after:content-['*'] after:ml-0.5 after:text-red-500"
                  }
                >
                  Optional services available
                </FadedSmallText>
              )}
            </div>
            <div className="flex justify-between items-center">
              {pack.discountedPrice ? (
                <div className="flex items-center">
                  <s className="font-general mr-2 text-gray-400">
                    {`${currencyFormatter(pack.price?.amount)}`}
                  </s>
                  <RegularText classes="font-general text-primary-100">
                    {`${currencyFormatter(pack.discountedPrice.amount)}`}
                  </RegularText>
                </div>
              ) : pack.price && pack.price.amount != null ? (
                <RegularText classes="font-general text-primary-100">
                  {`${currencyFormatter(pack.price?.amount)}`}
                </RegularText>
              ) : (
                <div></div>
              )}
              <Link to={`/package/${pack.slug}`}>
                <Button
                  handleClick={() => console.log("View Package!")}
                  primary
                  hover
                >
                  View
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardPackageItem;
