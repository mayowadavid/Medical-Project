import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui//layouts/Container";
import Tabs from "../../ui//core/Tabs";
import { useState } from "react";

import ConsultationCard from "../../ui//consultation/consultation-card";
import UpcomingStatus from "../../ui//consultation/status/upcoming-status";
import CompletedStatus from "../../ui//consultation/status/completed-status";
import CancelledStatus from "../../ui//consultation/status/cancelled-status";
import { IonPage, IonContent } from "@ionic/react";

const Consultations = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const Upcoming = [
    {
      id: 1,
      name: "Thor Odinson",
      specialty: "Cardiologist",
      date: "2022-06-09",
      time: "10:00 AM",
      location: "",
      imageUrl:
        "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
      isOnline: true,
      isCanceled: false,
      isCompleted: false,
    },
    {
      id: 2,
      name: "Jane Foster",
      specialty: "Internal Medicine",
      date: "2022-06-10",
      time: "3:00 PM",
      location: "",
      imageUrl:
        "http://wwsthemes.com/themes/medwise/v1.4/images/doctor-single.jpg",
      isOnline: true,
      isCanceled: false,
      isCompleted: false,
    },
    {
      id: 3,
      name: "Bruce Banner",
      specialty: "Pediatrician",
      date: "2022-06-15",
      time: "10:00 AM",
      location: "",
      imageUrl:
        "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
      isOnline: true,
      isCanceled: false,
      isCompleted: false,
    },
  ];

  const Completed = [
    {
      id: 1,
      name: "Thor Odinson",
      specialty: "Cardiologist",
      date: "2022-05-10",
      time: "10:00 AM",
      location: "",
      imageUrl:
        "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
      isOnline: true,
      isCanceled: false,
      isCompleted: true,
    },
    {
      id: 2,
      name: "Jane Foster",
      specialty: "Internal Medicine",
      date: "2022-04-29",
      time: "3:00 PM",
      location: "",
      imageUrl:
        "http://wwsthemes.com/themes/medwise/v1.4/images/doctor-single.jpg",
      isOnline: true,
      isCanceled: false,
      isCompleted: true,
    },
  ];

  const Canceled = [];

  const tabToRender = () => {
    if (selectedTab === 0) {
      if (Upcoming.length === 0) {
        {
          return <UpcomingStatus status="No Upcoming Consultations" />;
        }
      } else {
        {
          return Upcoming.map((booking) => (
            <ConsultationCard key={booking.id} booking={booking} />
          ));
        }
      }
    } else if (selectedTab === 1) {
      if (Completed.length === 0) {
        {
          return <CompletedStatus status="No Completed Consultations" />;
        }
      } else {
        {
          return Completed.map((booking) => (
            <ConsultationCard key={booking.id} booking={booking} />
          ));
        }
      }
    } else {
      if (Canceled.length === 0) {
        {
          return <CancelledStatus status="No Cancelled/Missed Consultations" />;
        }
      } else {
        {
          return Canceled.map((booking) => (
            <ConsultationCard key={booking.id} booking={booking} />
          ));
        }
      }
    }
  };

  return (
    <IonPage>
      <TopHeader pageName={"Consultations"} back={true} />
      <IonContent>
        <Container>
          <div className="flex justify-center my-6">
            <Tabs
              tabs={["Upcoming", "Completed", "Cancelled"]}
              handleSelectTab={(id) => setSelectedTab(id)}
              selected={selectedTab}
            />
          </div>
          {tabToRender()}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Consultations;
