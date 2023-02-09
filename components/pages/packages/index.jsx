import { useState } from "react";
import { SubHeadingText, RegularText } from "../../ui/core/Text";
import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";
import CardPackageItem from "../../ui/packages/CardPackageItem";
import { ITEMS } from "../../../lib/data";
import Tabs from "../../ui/core/Tabs";
import { IonContent, IonPage } from "@ionic/react";

const Packages = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const allMappedPackages = () => {
    const packsList = ITEMS.filter((item) => item.type == "package");
    const packListFinal = packsList.map((pack) => {
      const containedServices = pack.contains.filter(
        (service) => service.isOptional == false
      );
      const serviceList = containedServices.map((service) => {
        return ITEMS.find((item) => item.id == service.itemId);
      });
      const serviceListWithBenefits = serviceList.map((service) => {
        const containedBenefits = service.contains.map((benefit) => {
          return ITEMS.find((item) => item.id == benefit.itemId);
        });
        return {
          ...service,
          benefits: containedBenefits,
        };
      });
      const containedOptServices = pack.contains.filter(
        (service) => service.isOptional == true
      );
      const optServiceList = containedOptServices.map((service) => {
        return ITEMS.find((item) => item.id == service.itemId);
      });
      const optServiceListWithBenefits = optServiceList.map((service) => {
        const containedBenefits = service.contains.map((benefit) => {
          return ITEMS.find((item) => item.id == benefit.itemId);
        });
        return {
          ...service,
          benefits: containedBenefits,
        };
      });
      return {
        ...pack,
        services: serviceListWithBenefits,
        optionalServices: optServiceListWithBenefits,
      };
    });
    return packListFinal;
  };

  const tabToRender = () => {
    const allPackages = allMappedPackages();

    if (selectedTab === 0) {
      if (allPackages.length) {
        return <CardPackageItem healthPackages={allPackages} />;
      } else {
        return (
          <div className="flex justify-center">
            <SubHeadingText classes={"mb-5"}>
              There is no package available
            </SubHeadingText>
          </div>
        );
      }
    } else {
      return <RegularText classes="mb-5">Result: 0 package(s)</RegularText>;
    }
  };

  return (
    <IonPage>
      <TopHeader pageName={"Health Packages"} />
      <IonContent>
        <Container mainPage>
          <div className="flex justify-center my-3">
            <Tabs
              tabs={["All packages", "Best for you"]}
              handleSelectTab={(id) => setSelectedTab(id)}
              selected={selectedTab}
            />
          </div>
          {tabToRender()}
        </Container>
      </IonContent>
      {/* <IonFooter>
        <IonToolbar>
          <IonTitle>Test</IonTitle>
        </IonToolbar>
      </IonFooter> */}
    </IonPage>
  );
};

export default Packages;
