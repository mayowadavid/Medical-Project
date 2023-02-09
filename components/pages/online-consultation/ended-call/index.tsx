import { IonContent, IonPage } from "@ionic/react";
import { DOCTORS } from "../../../../lib/data";
import { Button } from "../../../ui/core/Buttons";

import {
  HeadingText,
  SubHeadingText,
  FadedRegularText,
} from "../../../ui/core/Text";

const EndedCall = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="flex flex-col justify-center items-center h-full space-y-4">
          <HeadingText classes="text-center mb-3 text-primary-100">
            Your video call session has ended
          </HeadingText>
          <div>
            <img
              src={DOCTORS[1].imageUrl}
              className="rounded-full w-36"
              alt="doctor"
            />
            <SubHeadingText>{DOCTORS[1].name}</SubHeadingText>
            <FadedRegularText>{DOCTORS[1].speciality}</FadedRegularText>
          </div>
          <Button href="/home" full>
            Go Back to Home
          </Button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EndedCall;
