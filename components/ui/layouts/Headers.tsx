import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonBackButton,
  IonIcon,
} from "@ionic/react";
import { createOutline } from "ionicons/icons";
import { useRouter } from "next/router";
import { VscChromeClose } from "react-icons/vsc";

interface EditHeaderProps {
  pageName: string;
  editFunction: () => void;
  cancelFunction: () => void;
  editMode: boolean;
  showEdit: boolean;
}

interface TopHeaderProps {
  pageName?: string;
  back?: boolean;
  home?: boolean;
}

export const EditHeader = ({
  pageName,
  editFunction,
  cancelFunction,
  editMode,
  showEdit,
}: EditHeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar className="toolbar-background">
        <IonButtons slot="start">
          <IonBackButton className="text-white" />
        </IonButtons>
        <IonTitle className="text-lg font-semibold">{pageName}</IonTitle>
        {showEdit ? (
          editMode ? (
            <IonButtons slot="primary" onClick={cancelFunction}>
              <IonTitle className="text-white text-sm">Cancel</IonTitle>
            </IonButtons>
          ) : (
            <IonButtons slot="primary">
              <IonButton className="text-white" onClick={editFunction}>
                <IonIcon slot="end" icon={createOutline} />
              </IonButton>
            </IonButtons>
          )
        ) : (
          <></>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export const TopHeader = ({ pageName, back, home }: TopHeaderProps) => {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar
        className={`${home ? "toolbar-background-home" : "toolbar-background"}`}
      >
        {back && (
          <IonButtons slot="start">
            <IonBackButton className="text-white text-lg" />
          </IonButtons>
        )}
        <IonTitle className="text-lg font-medium font-general">
          {pageName}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export const BlankHeader = ({}) => {
  const router = useRouter();
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar className={"bg-white px-2 w-full"}>
        <div
          className="text-xl text-primary-100 float-right"
          onClick={() => router.back()}
        >
          <VscChromeClose size="24px" />
        </div>
      </IonToolbar>
    </IonHeader>
  );
};
