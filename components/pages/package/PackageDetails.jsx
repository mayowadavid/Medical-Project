import { useEffect, useState } from "react";
import PackDetails from "../../ui/packages/PackDetails";
import { TopHeader } from "../../ui/layouts/Headers";
import { useParams } from "react-router-dom";
import { IonContent, IonPage } from "@ionic/react";
import { ITEMS } from "../../../lib/data";
const PackageDetails = () => {
  const [optionals, setOptionals] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const [healthPackage, setHealthPackage] = useState(null);
  const params = useParams();

  const getPackDetails = (packSlug) => {
    const pack = ITEMS.filter((item) => item.type == "package").find(
      (p) => p.slug == packSlug
    );
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
  };

  useEffect(() => {
    const healthPackage = getPackDetails(params.id);
    setHealthPackage(healthPackage);
  }, [params]);

  const handleOptional = (optional) => {
    if (optionals.includes(optional)) {
      setOptionals(
        optionals.filter((stateOptional) => optional.id !== stateOptional.id)
      );
      setTotalPrice((prev) => prev - optional.price.amount);
    } else {
      setOptionals((prev) => [...prev, optional]);
      totalPrice === null
        ? setTotalPrice(
            healthPackage?.discountedPrice
              ? healthPackage?.discountedPrice.amount + optional.price.amount
              : healthPackage?.price.amount + optional.price.amount
          )
        : setTotalPrice((prev) => prev + optional.price.amount);
    }
  };

  return (
    <IonPage className="font-general">
      <TopHeader pageName={"Package Details"} back />
      <IonContent>
        <div className="relative font-general bg-secondary-5 min-h-screen">
          <div className="px-4 pb-16">
            <PackDetails
              healthPackage={healthPackage}
              totalPrice={totalPrice}
              handleOptional={handleOptional}
              optionals={optionals}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PackageDetails;
