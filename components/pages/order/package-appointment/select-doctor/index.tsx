import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IonContent, IonPage } from "@ionic/react";
import { TopHeader } from "../../../../ui/layouts/Headers";
import { ITEMS } from "../../../../../lib/data";
import { ORDERS } from "../../../../../lib/data";
import { DOCTORS } from "../../../../../lib/data";
import DoctorsList from "../../../../ui/consultation/doctors/DoctorsList";
import Container from "../../../../ui/layouts/Container";
const SelectDoctor = () => {
  const { order_id } = useParams<{ order_id: string }>();
  const [orderedItem, setOrderedItem] = useState<any>();
  const [operatingEntities, setOperatingEntities] = useState<any>([]);
  const getItemDetails = (itemId: number) => {
    const ordered_item_details = ITEMS.find((item) => item.id == itemId);
    return ordered_item_details;
  };
  const getOrderedItemId = (orderId: string) => {
    const order_details = ORDERS.find((order) => order.id == parseInt(orderId));
    return order_details.basket[0].itemId;
  };
  const getOperatingEntityList = (operatingEntities: []) => {
    if (operatingEntities.length > 0) {
      const entityList = operatingEntities.map((entityId) => {
        return DOCTORS.find((doc) => doc.id == entityId);
      });
      return entityList;
    } else {
      return DOCTORS;
    }
  };
  useEffect(() => {
    const orderedItemId = getOrderedItemId(order_id);
    const orderedItemDetails = getItemDetails(orderedItemId);
    setOrderedItem(orderedItemDetails);
  }, [order_id]);
  useEffect(() => {
    if (orderedItem) {
      setOperatingEntities(
        getOperatingEntityList(
          orderedItem.operatingEntityIds ? orderedItem.operatingEntityIds : []
        )
      );
    }
  }, [orderedItem]);
  return (
    <IonPage>
      <TopHeader pageName={"Book Appointment"} back={true} />
      <IonContent>
        <Container>
          <div>
            <DoctorsList
              appointmentType={"package"}
              doctors={operatingEntities}
            />
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default SelectDoctor;
