import AppointmentCard from "./homeComponents/AppointmentCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Storage } from "@capacitor/storage";
import { Urql } from "../../../urql/urql";
import { listAppointmentsQuery } from "../../../urql/queries/appointments";
import { toast } from "react-toastify";

const Appointments = () => {
  const [entityId, setEntityId] = useState("");
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  useEffect(() => {
    const fetchEntityId = async () => {
      const { value: userData } = await Storage.get({
        key: "loggedUser",
      });
      if (userData && JSON.parse(userData).length > 0) {
        const user = JSON.parse(userData)[0];
        setEntityId(user.entity?.id);
      }
    };
    fetchEntityId();
  }, []);

  useEffect(() => {
    const fetchUpcomingAppointments = async () => {
      try {
        const res = await Urql.query(listAppointmentsQuery(entityId));
        if (res.data?.listAppointments?.items) {
          setUpcomingAppointments(
            res.data.listAppointments.items
              .filter((appointment) => {
                const allConfirmed = appointment.attendees.every(
                  (attendee) => attendee.confirmed === true
                );
                if (!allConfirmed) return false;
                const now = new Date();
                const startDateTime = new Date(appointment.startDateTimeUtc);
                return startDateTime > now;
              })
              .sort((a, b) => {
                const aDate = new Date(a.startDateTimeUtc);
                const bDate = new Date(b.startDateTimeUtc);
                return aDate.getTime() - bDate.getTime();
              })
          );
        }
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };
    if (entityId) {
      fetchUpcomingAppointments();
    }
  }, [entityId]);

  return (
    <>
      {upcomingAppointments?.length > 0 && (
        <div className="mb-4 px-4 font-general">
          <div className="font-title text-sectionHead mb-2 py-2">
            Upcoming Appointments
          </div>
          <div className="flex w-full overflow-x-auto snap-x md:justify-between pb-4 px-1">
            {upcomingAppointments.map((appointment, idx) => (
              <AppointmentCard key={idx} appointment={appointment} />
            ))}
            {upcomingAppointments?.length > 0 && (
              <Link to="/appointments">
                <div className="h-full flex flex-col items-center justify-center self-center ml-4 mr-8 w-40 text-typo">
                  <span className="px-4 mb-2">
                    <BsFillArrowRightCircleFill size="40px" color="#FF6B35" />
                  </span>
                  View All
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Appointments;
