import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { SubHeadingText } from "../../ui/core/Text";

import DoctorsList from "../../ui/consultation/doctors/DoctorsList";
import { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { DOCTORS } from "../../../lib/data";
import DoctorFilter from "../../ui/core/DoctorFilter";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const path = window.location.search;
    const query = new URLSearchParams(path);
    const doctorData = DOCTORS.filter((doctor) =>
      doctor.specialityIds.includes(query.get("specialityId"))
    );
    setDoctors(doctorData);
  }, []);

  const handleApplyFilters = (filters) => {
    const path = window.location.search;
    const query = new URLSearchParams(path);
    const filteredByMode = [];
    if (filters.mode === "All") {
      filteredByMode = DOCTORS.filter((doctor) =>
        doctor.specialityIds.includes(query.get("specialityId"))
      );
    } else {
      filteredByMode = DOCTORS.filter(
        (doctor) =>
          doctor.mode.includes(filters.mode) &&
          doctor.specialityIds.includes(query.get("specialityId"))
      );
    }
    const filteredByGender = [];
    if (filters.gender === "All") {
      filteredByGender = DOCTORS.filter((doctor) =>
        doctor.specialityIds.includes(query.get("specialityId"))
      );
    } else {
      filteredByGender = DOCTORS.filter(
        (doctor) =>
          doctor.gender === filters.gender &&
          doctor.specialityIds.includes(query.get("specialityId"))
      );
    }
    setDoctors(
      filteredByGender.filter((value) => filteredByMode.includes(value))
    );
  };

  return (
    <IonPage>
      <TopHeader pageName={"Consult with a doctor"} back />
      <IonContent>
        <Container>
          <div className="mt-2 flex justify-between items-center">
            <SubHeadingText>Doctors for you</SubHeadingText>
            <DoctorFilter
              applyFilters={(filters) => handleApplyFilters(filters)}
            />
          </div>
          <DoctorsList doctors={doctors} />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Doctors;
