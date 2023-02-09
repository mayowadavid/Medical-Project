import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { TopHeader } from "../../../ui/layouts/Headers";
import Container from "../../../ui/layouts/Container";
import DoctorSlots from "../../../ui/book-appointment/DoctorSlots";
import { DOCTORS } from "../../../../lib/data";


const RescheduleAppointment = () => {
  const params = useParams();
  const [appointment, setAppointment] = useState();
  const [doctor, setDoctor] = useState();

  

  useEffect(() => {
    const SampleData = [
      {
        id: 1,
        patientName: "Venkatesh Chakrabarty",
        patientEmail: "venkatesh@gmail.com",
        doctorName: "Thor Odinson",
        doctorSpecialty: "Cardiologist",
        date: "Wednesday, June 15, 2022",
        time: "10:00 AM",
        location: "747 52nd St. Oakland, CA 94609",
        imageUrl:
          "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
        isOnline: false,
        isCanceled: false,
        isCompleted: false,
        docId: 1,
      },
    ];
    const appointmentId = params.id;
    setAppointment(SampleData.find((a) => a.id == appointmentId));
  }, [params.id]);

  useEffect(() => {
    if (appointment) {
      const doc = DOCTORS.find((d) => (d.id = appointment.docId));
      setDoctor(doc);
    }
  }, [appointment]);

  return (
    <IonPage>
      <TopHeader
        pageName="Reschedule Appointment"
        back
        classes="font-general"
      />
      <IonContent>
        <Container>
          <DoctorSlots
            doctor={doctor}
            btnText="Reschedule"
            href="/appointment"
          />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default RescheduleAppointment;
