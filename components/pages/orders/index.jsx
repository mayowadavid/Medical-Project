import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { IonContent, IonPage } from "@ionic/react";
import PackageBookingCard from "../../ui/packages/PackageBookingCard";
import { ORDERS, ITEMS } from "../../../lib/data";
import { RegularText, SubHeadingText } from "../../ui/core/Text";
import { VscPackage } from "react-icons/vsc";

const Orders = () => {
  const allMappedOrders = () => {
    return ORDERS.map((order) => {
      const mappedOrder = {
        ...order,
        package: ITEMS.find((item) => item.id == order?.basket[0]?.itemId),
      };
      return mappedOrder;
    });
  };

  const allOrders = allMappedOrders();

  return (
    <IonPage>
      <TopHeader pageName={"My Orders"} back={true} />
      <IonContent>
        {allOrders.length > 0 ? (
          <Container>
            <div className="flex justify-start mt-4 px-2">
              <RegularText className="font-general font-semibold">
                All Orders
              </RegularText>
            </div>
            {allOrders.map((order, id) => (
              <PackageBookingCard key={id} order={order} />
            ))}
          </Container>
        ) : (
          <Container>
            <div className="flex flex-col justify-center items-center text-center my-36">
              <VscPackage className="w-24 h-24 text-primary-50 m-2" />
              <SubHeadingText classes="font-title font-semibold m-2">
                There are no existing orders yet.
              </SubHeadingText>
            </div>
          </Container>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Orders;
