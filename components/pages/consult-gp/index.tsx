import { IonPage, IonContent } from "@ionic/react";
import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { SubHeadingText } from "../../ui/core/Text";
import GPCard from "../../ui/consult-gp/GPCard";
import useModal from "../../../lib/hooks/useModal";
import AppointmentDisclaimerModal from "../../ui/core/modals/AppointmentDisclaimer";
import Disclaimer from "../doctors/disclaimer/Disclaimer";
import { useHistory } from "react-router-dom";

const ConsultGP = () => {
  const { setModal } = useModal();
  const history = useHistory();

  return (
    <IonPage>
      <TopHeader pageName={"Consult with a GP"} back={true} />
      <IonContent>
        <Container>
          <SubHeadingText classes={"py-4"}>General Practitioner</SubHeadingText>
          <div>
            <div
              onClick={() => {
                setModal("appointment-disclaimer");
              }}
            >
              <GPCard
                icon="/icons/consultation.png"
                text="CONSULT NOW WITH THE NEXT AVAILABLE GP"
                href="#"
              />
            </div>
            <GPCard
              classes="mt-8"
              icon="/icons/doctor.png"
              text="CONSULT WITH YOUR PREFERRED GP"
              href="/doctors?specialityId=sp8"
            />
          </div>
        </Container>
        <AppointmentDisclaimerModal>
          <Disclaimer
            afterBookingAppointment={() => {
              history.push("/pre-appointment");
            }}
          />
        </AppointmentDisclaimerModal>
      </IonContent>
    </IonPage>
  );
};

export default ConsultGP;
