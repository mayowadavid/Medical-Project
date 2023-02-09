import { IonContent, IonPage } from "@ionic/react";
import VerifyPhoneScreen from "../../ui/phone-verification/VerifyPhoneScreen";
import { useParams } from "react-router-dom";
const VerifyPhone = () => {
  const { phone } = useParams<{ phone: string }>();

  return (
    <IonPage>
      <IonContent>
        <VerifyPhoneScreen phoneNo={phone} />
      </IonContent>
    </IonPage>
  );
};

export default VerifyPhone;
