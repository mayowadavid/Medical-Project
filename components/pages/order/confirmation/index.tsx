import { IonContent, IonPage } from "@ionic/react";
import Container from "../../../ui/layouts/Container";
import { TopHeader } from "../../../ui/layouts/Headers";
import Appointment from "../../../ui/order/confirmation/Appointment";
import ConfirmationGraphic from "../../../ui/order/confirmation/ConfirmationGraphic";
import OrderDetails from "../../../ui/order/confirmation/OrderDetails";

const OrderConfirmationPage = () => {
  return (
    <IonPage>
      <TopHeader pageName="Order Confirmed" />
      <IonContent>
        <Container>
          <ConfirmationGraphic />
          <OrderDetails
            orderName={"Basic Screening for Under 40s"}
            amount={200}
          />
          <Appointment
            booked
            date="2022-06-07T08:00:00Z"
            location="747, 52nd Street"
          />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default OrderConfirmationPage;
