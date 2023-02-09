import { currencyFormatter } from "../../../lib/helper/currency";
import { RegularText, FadedSmallText, MediumText } from "../core/Text";
import Selector from "../core/Selector";

const OptionalServices = ({
  handleOptionalClick,
  healthPackage,
  optionals,
}) => {
  return (
    <div>
      {healthPackage?.optionalServices?.length > 0 ? (
        <div className="flex flex-col pb-2">
          <RegularText classes="font-medium">Optional Services</RegularText>
        </div>
      ) : (
        ""
      )}
      {healthPackage?.optionalServices?.map((service) => (
        <div key={service.id}>
          <div className="pb-2">
            <div className="text-primary-100 mt-2">
              <RegularText classes="font-medium">{service.name}</RegularText>
            </div>
            <FadedSmallText>{service.description}</FadedSmallText>
            {service?.benefits?.map((benefit) => {
              const handleSelection = () => {
                handleOptionalClick(benefit);
              };
              return (
                <Selector
                  key={benefit.id}
                  selected={optionals?.includes(benefit)}
                  handleSelection={handleSelection}
                  selectable={healthPackage.type !== "special"}
                >
                  <div>
                    <MediumText classes="text-sm">- {benefit.name}</MediumText>
                    <FadedSmallText classes="ml-3 pr-2 mb-1">
                      {benefit.description}
                    </FadedSmallText>
                    {healthPackage?.type === "special" ? (
                      <></>
                    ) : (
                      <MediumText classes="text-sm font-medium ml-3">
                        {currencyFormatter(benefit.price?.amount)}
                      </MediumText>
                    )}
                  </div>
                </Selector>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
export default OptionalServices;
