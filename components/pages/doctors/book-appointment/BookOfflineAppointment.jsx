import { useState, useEffect } from "react";
import { TopHeader } from "../../../ui/layouts/Headers";
import { IonContent, IonPage } from "@ionic/react";
import DoctorDetails from "../../../ui/book-appointment/DoctorDetails";
import DoctorSlots from "../../../ui/book-appointment/DoctorSlots";
import { DOCTORS } from "../../../../lib/data/doctors/doctors.data";
import { useParams } from "react-router-dom";
import Container from "../../../ui/layouts/Container";
import Tabs from "../../../ui/core/Tabs";
import DoctorSlotsOnline from "../../../ui/book-appointment/DoctorSlotsOnline";
import { BsCalendarX } from "react-icons/bs";
import AppointmentDisclaimerModal from "../../../ui/core/modals/AppointmentDisclaimer";
import Disclaimer from "../disclaimer/Disclaimer";
import { useHistory } from "react-router-dom";
import ITEMS from "../../../../lib/data/items/items.data";



const BookOfflineAppointment = () => {
  const params = useParams();
  const [doctor, setDoctor] = useState();
  const [item, setItem] = useState();
  const [selectedTab, setSelectedTab] = useState(0);
  const [availableTabs, setAvailableTabs] = useState(["Online", "In-person"]);
  const [appointmentType, setAppointmentType] = useState("normal");

  useEffect(() => {
    const docId = params.id;
    const doc = DOCTORS.find((d) => d.id == docId);
    const item = ITEMS.find((d) => d.id == docId);
    setItem(item);
    setDoctor(doc);
  }, [params.id]);



  useEffect(() => {
    if (params && params.type) {
      setAppointmentType(params.type);
    }
  }, [params]);
  useEffect(() => {
    if (doctor) {
      if (appointmentType == "package") {
        setAvailableTabs(["In-person"]);
      } else {
        setSelectedTab(doctor.mode.includes("Online") ? 0 : 1);
      }
    }
  }, [doctor, appointmentType]);

  const history = useHistory();
  const afterBookingAppointment = () => {
    history.push("/pre-appointment");
  };

  

  return (
    <IonPage>
      <TopHeader pageName="Book appointment" back classes="font-general" />
      <IonContent>
        <Container>
          <div className="flex flex-col pb-14">
            <DoctorDetails doctor={doctor} />
            <div className="w-full flex items-center justify-center">
              <Tabs
                tabs={availableTabs}
                selected={selectedTab}
                handleSelectTab={(id) => setSelectedTab(id)}
                classes="drop-shadow font-general"
              />
            </div>
            {appointmentType != "package" &&
              availableTabs.includes("Online") &&
              selectedTab === availableTabs.findIndex((i) => i == "Online") &&
              (doctor && doctor.workSchedule && doctor.workSchedule.online ? (
                <DoctorSlotsOnline
                  doctor={doctor}
                  item = {item}
                  btnText="Book Appointment"
                  href="/pre-appointment"
                />
              ) : (
                <div className="font-general font-semibold text-lg mt-20 text-center flex flex-col items-center">
                  <BsCalendarX size="64px" className="mb-4 text-red-600" />
                  Sorry this mode is not available for current doctor!
                </div>
              ))}

            {availableTabs.includes("In-person") &&
              selectedTab ===
                availableTabs.findIndex((i) => i == "In-person") &&
              (doctor && doctor.workSchedule && doctor.workSchedule.offline ? (
                <DoctorSlots
                  doctor={doctor}
                  item = {item}
                  btnText="Book Appointment"
                  href="/pre-appointment"
                />
              ) : (
                <div className="font-general font-semibold text-lg mt-20 text-center flex flex-col items-center">
                  <BsCalendarX size="64px" className="mb-4 text-red-600" />
                  Sorry this mode is not available for current doctor!
                </div>
              ))}
          </div>
        </Container>
        <AppointmentDisclaimerModal>
          <Disclaimer afterBookingAppointment={afterBookingAppointment} />
        </AppointmentDisclaimerModal>
      </IonContent>
    </IonPage>
  );
};

export default BookOfflineAppointment;
