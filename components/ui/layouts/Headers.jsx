import { MediumText, SubHeadingText } from "../core/Text";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

export const EditHeader = ({
  pageName,
  editFunction,
  cancelFunction,
  editMode,
  showEdit,
}) => {
  const router = useRouter();

  return (
    <IonHeader
      className="font-general bg-primary-100 fixed top-0 w-full p-4 text-white z-10 rounded-b-lg"
      mode="ios"
    >
      <IonToolbar>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row">
            <div onClick={() => router.back()}>
              <SubHeadingText>
                <BsArrowLeft />
              </SubHeadingText>
            </div>
            <IonTitle className="mx-4">{pageName}</IonTitle>
          </div>
          {showEdit ? (
            editMode ? (
              <div
                onClick={() => {
                  cancelFunction();
                }}
                className="flex flex-row items-center"
              >
                <MediumText classes="underline underline-offset-2">
                  Cancel
                </MediumText>
              </div>
            ) : (
              <div
                onClick={() => editFunction()}
                className="flex flex-row items-center"
              >
                <MediumText>Edit</MediumText>
                <AiFillEdit size="20px" className="ml-1" />
              </div>
            )
          ) : (
            <></>
          )}
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export const TopHeader = ({
  pageName,
  back,
  roundedNone,
  fade,
  tertiary,
  home,
}) => {
  const router = useRouter();
  return (
    <IonHeader
      className={`${
        home ? "ios-top-safe-area-home" : "ios-top-safe-area"
      } p-4 text-white ${tertiary ? "bg-tertiary-100" : "bg-primary-100"} 
        ${roundedNone ? "rounded-none" : "rounded-b-lg"}`}
      collapse={`${fade ? "fade" : ""}`}
      mode="ios"
    >
      <div className="mt-3">
        <IonToolbar>
          <div className="flex items-center space-x-3">
            {back ? (
              <div onClick={() => router.back()}>
                <SubHeadingText>
                  <BsArrowLeft />
                </SubHeadingText>
              </div>
            ) : (
              <></>
            )}
            <IonTitle>{pageName}</IonTitle>
          </div>
        </IonToolbar>
      </div>
    </IonHeader>
  );
};
