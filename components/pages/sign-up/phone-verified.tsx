import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import PhoneVerifiedScreen from "../../ui/phone-verification/PhoneVerifiedScreen";
const PhoneVerified = () => {
  return (
    <IonPage>
      <IonContent>
        <PhoneVerifiedScreen />
      </IonContent>
    </IonPage>
  );
};

export default PhoneVerified;
