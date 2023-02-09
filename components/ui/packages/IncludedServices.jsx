import { VscInfo } from "react-icons/vsc";
import ReactTooltip from "react-tooltip";
import { RegularText, FadedSmallText, MediumText } from "../core/Text";
import { ITEM_TAGS } from "../../../lib/data";
const IncludedServices = (props) => {
  const { healthPackage } = props;
  return (
    <div className="bg-white rounded-lg pb-6 mb-6 overflow-hidden shadow-xl">
      <ReactTooltip effect="solid" multiline />
      <div className="bg-secondary-100 py-4 px-4">
        <RegularText classes="text-white">Included Services</RegularText>
      </div>
      <div className="mt-4">
        {ITEM_TAGS.map((tag) => {
          const serviceListForTag = healthPackage?.services?.filter(
            (service) => {
              return service?.tagIds?.includes(tag.id);
            }
          );
          if (serviceListForTag?.length > 0)
            return (
              <div key={tag.id} className="flex flex-col">
                <div className="text-primary-100 px-4">
                  <RegularText classes="font-medium">{tag.name}</RegularText>
                </div>
                {serviceListForTag?.map((service) => (
                  <div
                    className="mx-4 border-b-2 border-gray-300"
                    key={service?.id}
                  >
                    <div className="py-2">
                      <div className="text-secondary-100 font-medium text-sectionHead">
                        {service?.name}
                      </div>
                      <FadedSmallText>{service?.description}</FadedSmallText>
                      {service?.benefits?.map((benefit) => {
                        return benefit.description &&
                          benefit.description !== "" ? (
                          <div
                            key={benefit.id}
                            className="flex justify-between tooltip items-center"
                            data-tip={benefit.description}
                          >
                            <div className="grow lg:flex-none cursor-pointer text-left my-1">
                              <MediumText classes="text-sm">
                                {benefit.name}
                              </MediumText>
                            </div>
                            <p className="lg:hidden">
                              <VscInfo size={16} />
                            </p>
                          </div>
                        ) : (
                          <div className="my-1" key={benefit.id}>
                            <MediumText classes="text-sm">
                              {benefit.name}
                            </MediumText>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            );
          else return <div key={tag.id}></div>;
        })}
      </div>
      {healthPackage?.services
        ?.filter((service) => service.tagIds.length == 0)
        .map((service) => {
          return (
            <div
              className="mx-4 border-b-2 border-gray-300 last:border-b-0"
              key={service?.id}
            >
              <div className="py-2">
                <div className="text-primary-100">
                  <RegularText classes="font-medium">
                    {service?.name}
                  </RegularText>
                </div>
                <FadedSmallText>{service?.description}</FadedSmallText>
                {service?.benefits?.map((benefit) => {
                  return benefit.description && benefit.description !== "" ? (
                    <div
                      key={benefit.id}
                      className="flex justify-between tooltip items-center"
                      data-tip={benefit.description}
                    >
                      <div className="grow lg:flex-none cursor-pointer text-left my-1">
                        <MediumText classes="text-sm">
                          {benefit.name}
                        </MediumText>
                      </div>
                      <p className="lg:hidden">
                        <VscInfo size={16} />
                      </p>
                    </div>
                  ) : (
                    <div className="my-1" key={benefit.id}>
                      <MediumText classes="text-sm">{benefit.name}</MediumText>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default IncludedServices;
