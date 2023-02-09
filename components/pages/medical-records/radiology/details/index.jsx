import Container from "../../../../ui/layouts/Container";
import { TopHeader } from "../../../../ui/layouts/Headers";
import { Button } from "../../../../ui/core/Buttons";
import Floater from "../../../../ui/core/Floater";
import PackageAndLocation from "../../../../ui/lab-results/details/PackageAndLocation";
import PatientDetails from "../../../../ui/lab-results/details/PatientDetails";
import GlobalTestSummary from "../../../../ui/lab-results/details/GlobalTestSummary";
import AppointmentDetails from "../../../../ui/lab-results/details/AppointmentDetails";
import { IonContent, IonPage } from "@ionic/react";
import {
  PATIENTS,
  MEDICAL_RECORDS,
  ENCOUNTERS,
  APPOINTMENTS,
} from "../../../../../lib/data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RadiologyResultDetails = () => {
  // const [patient, setPatient] = useState(null);
  // useEffect(() => {
  //   const patient = PATIENTS.find((patient) => patient.id === "pt1");
  //   setPatient(patient);
  // }, []);
  const [medicalRecord, setMedicalRecord] = useState(null);
  const [patient, setPatient] = useState(null);
  const [encounter, setEncounter] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const params = useParams();

  useEffect(() => {
    const medicalRecord = MEDICAL_RECORDS.find(
      (medicalRecord) => medicalRecord.id === params.id
    );
    const patient = PATIENTS.find(
      (patient) => patient.id === medicalRecord?.patientId
    );
    const encounter = ENCOUNTERS.find(
      (encounter) => encounter.id === medicalRecord?.encounterId
    );
    const appointment = APPOINTMENTS.find(
      (appointment) => appointment.id === encounter?.appointmentId
    );
    setMedicalRecord(medicalRecord);
    setPatient(patient);
    setEncounter(encounter);
    setAppointment(appointment);
  }, [params.id]);

  return (
    <IonPage>
      <TopHeader pageName={"Radiology Result Details"} back />
      <IonContent>
        <Container>
          <PackageAndLocation medicalRecord={medicalRecord} />
          <PatientDetails patient={patient} />
          <AppointmentDetails appointment={appointment} />
          <GlobalTestSummary summary={medicalRecord?.summary} />

          <Floater>
            <Button
              full
              handleClick={() => console.log("Downloading PDF file...")}
            >
              Download PDF File
            </Button>
          </Floater>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default RadiologyResultDetails;
