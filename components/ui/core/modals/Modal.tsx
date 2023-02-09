import { ReactNode } from "react";
import {
  AlertButton,
  IonAlert,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import useModal from "../../../../lib/hooks/useModal";

// *All of the modals must be placed inside the IonContent

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  router?: HTMLIonRouterOutletElement | null;
  closeText?: string;
  handleClose?: () => void;
}

interface AlertProps {
  isOpen: boolean;
  title: string;
  message: string;
  buttons: (string | AlertButton)[];
}

export const FullScreenModal = ({ isOpen, title, children }: ModalProps) => {
  const { closeModal } = useModal();
  return (
    <IonModal isOpen={isOpen} onDidDismiss={closeModal}>
      <IonContent className="ion-padding">
        <IonHeader translucent className="mb-4">
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonModal>
  );
};

export const BottomSheetModal = ({
  isOpen,
  title,
  children,
  closeText,
  handleClose,
}: ModalProps) => {
  const { closeModal } = useModal();
  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={closeModal}
      breakpoints={[0, 0.5, 1]}
      initialBreakpoint={0.5}
    >
      <IonContent className="ion-padding">
        <IonHeader translucent className="mb-4">
          <IonToolbar>
            <IonTitle className="text-base">{title}</IonTitle>
            <IonButtons slot="end">
              <div
                onClick={() => {
                  closeModal();
                  handleClose ? handleClose() : null;
                }}
                className="text-xs font-semibold"
              >
                {closeText ? closeText : "CLOSE"}
              </div>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonModal>
  );
};

//? CardModal only works with iOS, on Android it will shows just as the same as FullScreenModal
export const CardModal = ({ isOpen, title, children, router }: ModalProps) => {
  const { closeModal } = useModal();
  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={closeModal}
      swipeToClose={true}
      presentingElement={router || undefined}
    >
      <IonContent className="ion-padding">
        <IonHeader translucent className="mb-4">
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonModal>
  );
};

export const AlertModal = ({ isOpen, title, message, buttons }: AlertProps) => {
  const { closeModal } = useModal();
  return (
    <>
      <IonAlert
        mode="ios"
        translucent
        isOpen={isOpen}
        onDidDismiss={closeModal}
        header={title}
        message={message}
        buttons={buttons}
      />
    </>
  );
};
