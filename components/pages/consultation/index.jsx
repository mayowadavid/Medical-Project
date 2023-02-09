import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";

import PaymentDetails from "../../ui/appointments/payment-details";
import ConsultationDetails from "../../ui/consultation/details/consultation-details";
import ConsultationStatus from "../../ui/consultation/details/consultation-status";
import PatientDetails from "../../ui/appointments/PatientDetails";
import { IonPage, IonContent } from "@ionic/react";
import FloaterButton from "../../ui/appointments/FloaterButton";
import useModal from "../../../lib/hooks/useModal";
import { AlertModal } from "../../ui/core/modals/Modal";

const ConsultationDetailsPage = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const SampleData = [
    {
      id: 1,
      patientName: "Venkatesh Chakrabarty",
      patientEmail: "venkatesh@gmail.com",
      doctorName: "Jane Foster",
      doctorSpecialty: "Internal Medicine",
      date: "Friday, June 10, 2022",
      time: "3:00 PM",
      location: "",
      imageUrl:
        "http://wwsthemes.com/themes/medwise/v1.4/images/doctor-single.jpg",
      isCanceled: false,
      isCompleted: false,
    },
  ];

  return (
    <IonPage>
      <TopHeader pageName={"Your Consultation"} back={true} />
      <IonContent>
        <Container>
          <ConsultationStatus
            isCanceled={SampleData[0].isCanceled}
            isCompleted={SampleData[0].isCompleted}
          />
          <ConsultationDetails
            doctorName={SampleData[0].doctorName}
            doctorSpecialty={SampleData[0].doctorSpecialty}
            date={SampleData[0].date}
            time={SampleData[0].time}
            location={SampleData[0].location}
            imageUrl={SampleData[0].imageUrl}
            isOnline={SampleData[0].isOnline}
            isCanceled={SampleData[0].isCanceled}
            isCompleted={SampleData[0].isCompleted}
          />
          <PatientDetails
            patientName={SampleData[0].patientName}
            patientEmail={SampleData[0].patientEmail}
          />
          <PaymentDetails />
          <FloaterButton openModal={openModal} />
        </Container>
        <AlertModal
          isOpen={isOpen}
          closeModal={closeModal}
          title="Cancel Confirmation"
          message="Are you sure want to cancel this consultation?"
          destructive
        />
      </IonContent>
    </IonPage>
  );
};

export default ConsultationDetailsPage;
