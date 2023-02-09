import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import AppointmentDetails from "../../ui/appointments/AppointmentDetails";
import AppointmentStatus from "../../ui/appointments/AppointmentStatus";
import PaymentDetails from "../../ui/appointments/payment-details";
import PatientDetails from "../../ui/appointments/PatientDetails";
import { IonContent, IonPage } from "@ionic/react";
import FloaterButton from "../../ui/appointments/FloaterButton";
import CancelAppointmentModal from "../../ui/core/modals/CancelAppointment";
import { getAppointmentByIdQuery } from "../../../urql/queries/appointments";

import {
  getWeekday,
  getDate,
  getMonth,
  getFullYear,
  getTime,
} from "../../../utils/date/DateFunctions";
import PageLoader from "../../ui/loader/Loader";
import ErrorHandler from "../../ui/error/Error";
import { Urql } from "../../../urql/urql";

const AppointmentPage = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [patientJson, setPatientJson] = useState(null);
  const [doctorJson, setDoctorJson] = useState(null);
  const params = useParams();

  const fetchData = async () => {
    try {
      const res = await Urql.query(getAppointmentByIdQuery, {
        id: params.id,
      });

      const patientJson = JSON.parse(
        res.data.getAppointmentById.attendees.find(
          (attendee) => attendee.key === "patient"
        ).entity.valueAsJsonString
      );

      const doctorJson = JSON.parse(
        res.data.getAppointmentById.attendees.find(
          (attendee) => attendee.key === "doctor"
        ).entity.valueAsJsonString
      );

      setFetchedData(res.data.getAppointmentById);
      setPatientJson(patientJson);
      setDoctorJson(doctorJson);
    } catch (error) {
      <ErrorHandler errorMessage={error.message} />;
      console.log(error);
    }
  };

  const isAppointmentInProgress = () => {
    const now = new Date();
    const startDateTimeUTC = new Date(fetchedData?.startDateTimeUtc);
    const endDateTimeUTC = new Date(fetchedData?.endDateTimeUtc);
    const diffStart = Math.abs(now - startDateTimeUTC);
    const diffEnd = Math.abs(now - endDateTimeUTC);
    const diffStartMinutes = Math.floor((diffStart % 86400000) / 60000);
    const diffEndMinutes = Math.floor((diffEnd % 86400000) / 60000);
    if (diffStartMinutes < 5 || diffEndMinutes <= 5) {
      return true;
    } else {
      return false;
    }
  };

  const getAppointmentDate = () => {
    const date = new Date(fetchedData?.startDateTimeUtc);
    return `${getWeekday(date)}, ${getDate(date)} ${getMonth(
      date
    )} ${getFullYear(date)}`;
  };

  const getAppointmentTime = () => {
    const date = new Date(fetchedData?.startDateTimeUtc);
    return `${getTime(date)}`;
  };

  const getAppointmentEndTime = () => {
    const date = new Date(fetchedData?.endDateTimeUtc);
    return `${getTime(date)}`;
  };

  // const getAppointmentDuration = () => {
  //   const date = new Date(fetchedData?.startDateTimeUtc);
  //   const endDate = new Date(fetchedData?.endDateTimeUtc);
  //   const diff = endDate.getTime() - date.getTime();
  //   const diffMinutes = Math.round(diff / 60000);
  //   return `${diffMinutes} minutes`;
  // };

  const isVirtual = fetchedData?.attendees.every(
    (attendee) => attendee.mode === "VIRTUAL"
  );

  const appointmentStatus = (status) => {
    if (
      status.every((attendee) => attendee.confirmed === true) &&
      status.every((attendee) => attendee.attended === false)
    ) {
      return "confirmed";
    } else if (status.every((attendee) => attendee.confirmed === false)) {
      return "cancelled";
    } else {
      return "completed";
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  return (
    <IonPage>
      <TopHeader pageName={"Your Appointment"} back={true} />
      <IonContent>
        <Container mainPage>
          {fetchedData === null ? (
            <>
              <PageLoader />
            </>
          ) : (
            <>
              <AppointmentStatus
                status={appointmentStatus(fetchedData?.attendees)}
              />
              <AppointmentDetails
                doctorName={doctorJson?.name}
                // doctorSpeciality={speciality}
                imageUrl={doctorJson?.profilePicture}
                status={appointmentStatus(fetchedData.attendees)}
                location={fetchedData?.location}
                isVirtual={isVirtual}
                date={getAppointmentDate()}
                startTime={getAppointmentTime()}
                endTime={getAppointmentEndTime()}
                // duration={getAppointmentDuration()}
                showButton={isAppointmentInProgress()}
              />
              <PatientDetails patient={patientJson} />
              <PaymentDetails />
              <FloaterButton
                appointmentId={fetchedData.id}
                status={appointmentStatus(fetchedData?.attendees)}
              />
            </>
          )}
        </Container>
        <CancelAppointmentModal destructive />
      </IonContent>
    </IonPage>
  );
};

export default AppointmentPage;
