import { IonContent, IonPage } from "@ionic/react";
import { Button } from "../core/Buttons";
import { RegularText } from "../core/Text";
import Container from "../layouts/Container";
import { TopHeader } from "../layouts/Headers";

interface ErrorHandlerProps {
  errorMessage: string;
}

const ErrorHandler = ({ errorMessage }: ErrorHandlerProps) => {
  return (
    <IonPage>
      <TopHeader pageName="Error" />
      <IonContent class="ion-padding">
        <div className="grid h-full place-content-center space-y-4">
          <RegularText classes="text-center">
            Oh no... Something went wrong {errorMessage}
          </RegularText>
          <img
            src="/assets/images/myhcerror.svg"
            alt="Error!"
            className="max-w-72 max-h-72"
          />
          <Button href="/home">Back to Home</Button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ErrorHandler;
