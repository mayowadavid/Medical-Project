import { IonContent, IonPage } from "@ionic/react";
import FailedDetails from "../../../ui/order/failure/FailedDetails";
import FailureGraphic from "../../../ui/order/failure/FailureGraphic";

const OrderFailurePage = () => {
  return (
    <IonPage>
      <IonContent>
        <FailureGraphic />
        <FailedDetails />
      </IonContent>
    </IonPage>
  );
};

export default OrderFailurePage;
