import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { IonContent, IonPage } from "@ionic/react";
import RecordCard from "../../ui/medical-records/RecordCard";

import { MEDICAL_RECORDS } from "../../../lib/data";
import { useState, useEffect } from "react";

const MedicalRecordsPage = () => {
  const [medRecords, setMedRecords] = useState([]);

  useEffect(() => {
    setMedRecords(MEDICAL_RECORDS);
  }, []);

  const groupedRecords = medRecords.reduce((acc, curr) => {
    const type = curr.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(curr);
    return acc;
  }, {});

  const RecordMenus = [
    {
      name: "Lab Results",
      noOfRecords: `${
        groupedRecords["lab-test"] ? groupedRecords["lab-test"].length : 0
      }`,
      link: groupedRecords["lab-test"] ? "/medical-records/lab" : "#",
    },
    {
      name: "Radiology",
      noOfRecords: `${
        groupedRecords.radiology ? groupedRecords.radiology.length : 0
      }`,
      link: groupedRecords.radiology ? "/medical-records/radiology" : "#",
    },
    {
      name: "Personal Records",
      noOfRecords: `${
        groupedRecords.personal ? groupedRecords.personal.length : 0
      }`,
      link: groupedRecords.personal ? "/medical-records/personal" : "#",
    },
    {
      name: "Immunization",
      noOfRecords: `${
        groupedRecords.immunization ? groupedRecords.immunization.length : 0
      }`,
      link: groupedRecords.immunization ? "/medical-records/immunization" : "#",
    },
  ];

  return (
    <IonPage>
      <TopHeader pageName={"Medical Records"} back={true} />
      <IonContent>
        <Container>
          <div className="flex flex-col justify-center mt-4 mb-8">
            {RecordMenus.map((menu, index) => (
              <RecordCard
                key={index}
                name={menu.name}
                link={menu.link}
                noOfRecords={menu.noOfRecords}
              />
            ))}
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default MedicalRecordsPage;
