import { useHistory } from "react-router-dom";
import Disclaimer from "../../../pages/doctors/disclaimer/Disclaimer";
import AppointmentDisclaimerModal from "../../core/modals/AppointmentDisclaimer";
import DoctorCard from "./DoctorCard";

const DoctorsList = ({ doctors, appointmentType }) => {
  const history = useHistory();

  return (
    <div className="w-full h-96">
      {doctors.length === 0 ? (
        <div className="h-full flex w-full justify-center items-center text-center text-primary-100">
          No doctors found for your search.
        </div>
      ) : (
        <div className="pb-2 flex flex-col gap-2">
          {doctors.map((doctor) => (
            <DoctorCard
              appointmentType={appointmentType}
              key={doctor.id}
              doctor={doctor}
            />
          ))}
        </div>
      )}
      <AppointmentDisclaimerModal>
        <Disclaimer
          afterBookingAppointment={() => history.push("/pre-appointment")}
        />
      </AppointmentDisclaimerModal>
    </div>
  );
};

export default DoctorsList;
