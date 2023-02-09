import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IonContent, IonPage } from "@ionic/react";
import { TopHeader } from "../../../ui/layouts/Headers";
import Container from "../../../ui/layouts/Container";
import { Link } from "react-router-dom";
import { Card } from "../../../ui/core/Card";
import { MediumText } from "../../../ui/core/Text";
import { ITEMS } from "../../../../lib/data";
import { ORDERS } from "../../../../lib/data";
import { DOCTORS } from "../../../../lib/data";
const PackageAppointment = () => {
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
          <div className="my-8 font-general">
            <div className="mb-4">
              <Link
                to={
                  operatingEntities && operatingEntities[0]
                    ? `/doctors/book-appointment/${operatingEntities[0].id}/package`
                    : "#"
                }
              >
                <Card
                  classes={
                    "!border-none drop-shadow-sm no-shadow bg-skyBlue/20 h-56 flex flex-col justify-center items-center"
                  }
                >
                  <div className="my-4 drop-shadow w-24 h-24 bg-skyBlue mx-auto rounded-full flex justify-center items-center">
                    <img
                      src={"/icons/outline-medical-staff.png"}
                      alt="doctor"
                      className="h-16 w-16"
                    />
                  </div>
                  <MediumText classes="font-medium text-lg px-12 text-center mb-3">
                    Get a Doctor Assigned Automatically
                  </MediumText>
                </Card>
              </Link>
            </div>
            <div>
              <Link to={`/order/package-appointment/select-doctor/${order_id}`}>
                <Card
                  classes={
                    "!border-none drop-shadow-sm no-shadow bg-skyBlue/20 h-56 flex flex-col justify-center items-center"
                  }
                >
                  <div className="my-4 drop-shadow w-24 h-24 bg-skyBlue mx-auto rounded-full flex justify-center items-center">
                    <img
                      src={"/icons/doctor.png"}
                      alt="doctor"
                      className="h-16 w-16"
                    />
                  </div>
                  <MediumText classes="font-medium text-lg px-12 text-center mb-3">
                    Select a Preferred Doctor
                  </MediumText>
                </Card>
              </Link>
            </div>
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default PackageAppointment;
