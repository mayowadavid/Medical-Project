import { useState } from "react";
import OnboardingStepper from "../../ui/onboarding/OnboardingStepper";
import { IonContent, IonPage } from "@ionic/react";
import { useParams } from "react-router-dom";
const Onboarding = () => {
  const { startScreen } = useParams<{ startScreen: string }>();
  const [currentScreen, setCurrentScreen] = useState<number>(
    parseInt(startScreen)
  );
  const nextFunction = () => {
    setCurrentScreen((prev) => prev + 1);
  };
  const prevFunction = () => {
    setCurrentScreen((prev) => prev - 1);
  };
  return (
    <IonPage>
      <IonContent>
        <OnboardingStepper
          currentScreen={currentScreen}
          nextFunc={nextFunction}
          prevFunc={prevFunction}
          startingScreen={parseInt(startScreen)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
