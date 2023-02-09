import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import Tabs from "../../ui/core/Tabs";
import { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";

import UpcomingStatus from "../../ui/consultation/status/upcoming-status";
import CompletedStatus from "../../ui/consultation/status/completed-status";
import CancelledStatus from "../../ui/consultation/status/cancelled-status";
import AppointmentCard from "../../ui/appointments/AppointmentCard";
import { APPOINTMENTS } from "../../../lib/data";
import NativePageLoader from "../../ui/loader/Loader";

const Appointments = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  useEffect(() => {
    setAppointments(APPOINTMENTS);
  });

  //group the appointments by status
  const Appointments = appointments.reduce(
    (acc, appointment) => {
      if (appointment.status === "confirmed") {
        acc.confirmed.push(appointment);
      } else if (appointment.status === "completed") {
        acc.completed.push(appointment);
      } else if (appointment.status === "cancelled") {
        acc.cancelled.push(appointment);
      }
      return acc;
    },
    { confirmed: [], completed: [], cancelled: [] }
  );

  const tabToRender = () => {
    if (selectedTab === 0) {
      if (Appointments.confirmed.length === 0) {
        {
          return <UpcomingStatus status="No Upcoming Appointments" />;
        }
      } else {
        {
          return Appointments.confirmed.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ));
        }
      }
    } else if (selectedTab === 1) {
      if (appointments.completed?.length === 0) {
        {
          return <CompletedStatus status="No Completed Appointments" />;
        }
      } else {
        {
          return Appointments.completed.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ));
        }
      }
    } else {
      if (appointments.cancelled?.length === 0) {
        {
          return <CancelledStatus status="No Cancelled/Missed Appointments" />;
        }
      } else {
        {
          return Appointments.cancelled.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ));
        }
      }
    }
  };

  return (
    <IonPage>
      {loading ? (
        <NativePageLoader />
      ) : (
        <>
          <TopHeader pageName={"Appointments"} back={true} />
          <IonContent>
            <Container>
              <div className="flex justify-center mt-4 mb-8">
                <Tabs
                  tabs={["Upcoming", "Completed", "Cancelled"]}
                  handleSelectTab={(id) => setSelectedTab(id)}
                  selected={selectedTab}
                />
              </div>
              {tabToRender()}
            </Container>
          </IonContent>
        </>
      )}
    </IonPage>
  );
};

export default Appointments;
