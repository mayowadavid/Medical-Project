import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";

import NoAppointments from "../../ui/consultation/status/NoAppointments";
import AppointmentCard from "../../ui/appointments/AppointmentCard";

import { Storage } from "@capacitor/storage";
import { SubHeadingText } from "../../ui/core/Text";
import AppointmentFilter from "../../ui/appointments/AppointmentFilter";
import PageLoader from "../../ui/loader/Loader";

import { Urql } from "../../../urql/urql";
import { listAppointmentsQuery } from "../../../urql/queries/appointments";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointments = () => {
  const [entityId, setEntityId] = useState("");
  const [selectedAppointments, setSelectedAppointments] = useState([]);
  const [filter, setFilter] = useState({
    mode: "All",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntityId = async () => {
      const { value: userData } = await Storage.get({
        key: "loggedUser",
      });
      if (userData && JSON.parse(userData).length > 0) {
        const user = JSON.parse(userData)[0];
        setEntityId(user.entity.id);
      }
    };
    fetchEntityId();
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await Urql.query(listAppointmentsQuery(entityId));
        const all = res.data.listAppointments.items.sort((a, b) => {
          const aDate = new Date(a.startDateTimeUtc);
          const bDate = new Date(b.startDateTimeUtc);
          return aDate.getTime() - bDate.getTime();
        });
        const upcoming = res.data.listAppointments.items
          .filter(
            (appointment) =>
              appointment.startDateTimeUtc > new Date().toISOString() &&
              appointment.attendees.every(
                (attendee) => attendee.confirmed === true
              )
          )
          .sort((a, b) => {
            const aDate = new Date(a.startDateTimeUtc);
            const bDate = new Date(b.startDateTimeUtc);
            return aDate.getTime() - bDate.getTime();
          });
        const completed = res.data.listAppointments.items
          .filter(
            (appointment) =>
              (appointment.endDateTimeUtc && appointment.startDateTimeUtc) <
                new Date().toISOString() &&
              appointment.attendees.every((attendee) => attendee.confirmed) &&
              appointment.attendees.every(
                (attendee) => attendee.attended === true
              ) &&
              appointment.isDeleted === false
          )
          .sort((a, b) => {
            const aDate = new Date(a.startDateTimeUtc);
            const bDate = new Date(b.startDateTimeUtc);
            return aDate.getTime() - bDate.getTime();
          });
        const cancelled = res.data.listAppointments.items
          .filter(
            (appointment) =>
              appointment.isDeleted === true ||
              (appointment.startDateTimeUtc < new Date().toISOString() &&
                appointment.attendees.some(
                  (attendee) =>
                    attendee.key === "doctor" && attendee.attended === false
                ))
          )
          .sort((a, b) => {
            const aDate = new Date(a.startDateTimeUtc);
            const bDate = new Date(b.startDateTimeUtc);
            return aDate.getTime() - bDate.getTime();
          });
        const missed = res.data.listAppointments.items
          .filter(
            (appointment) =>
              appointment.startDateTimeUtc < new Date().toISOString() &&
              appointment.attendees.some(
                (attendee) =>
                  attendee.key === "patient" && attendee.attended === false
              ) &&
              appointment.attendees.some(
                (attendee) =>
                  attendee.key === "doctor" && attendee.attended === true
              ) &&
              appointment.isDeleted === false
          )
          .sort((a, b) => {
            const aDate = new Date(a.startDateTimeUtc);
            const bDate = new Date(b.startDateTimeUtc);
            return aDate.getTime() - bDate.getTime();
          });
        if (filter.mode === "All") {
          setSelectedAppointments(all);
        } else if (filter.mode === "Upcoming") {
          setSelectedAppointments(upcoming);
        } else if (filter.mode === "Completed") {
          setSelectedAppointments(completed);
        } else if (filter.mode === "Cancelled") {
          setSelectedAppointments(cancelled);
        } else if (filter.mode === "Missed") {
          setSelectedAppointments(missed);
        }
        setLoading(false);
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      }
    };
    if (entityId) {
      fetchAppointments();
    }
  }, [entityId, filter]);

  return (
    <IonPage>
      <ToastContainer />
      <TopHeader pageName={"Appointments"} back={true} />
      {!loading ? (
        <IonContent>
          <Container>
            <div className="flex justify-between mt-4 mb-8">
              <SubHeadingText>{filter.mode} Appointments</SubHeadingText>
              <AppointmentFilter
                filter={filter}
                applyFilters={(filter) => setFilter(filter)}
              />
            </div>
            {selectedAppointments?.length > 0 ? (
              selectedAppointments?.map((appointment) => (
                <AppointmentCard
                  key={appointment?.id}
                  appointment={appointment}
                />
              ))
            ) : (
              <NoAppointments status={filter.mode} />
            )}
          </Container>
        </IonContent>
      ) : (
        <PageLoader />
      )}
    </IonPage>
  );
};

export default Appointments;
