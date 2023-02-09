import Container from "../../../ui/layouts/Container";
import { TopHeader } from "../../../ui/layouts/Headers";
import { IonPage, IonContent } from "@ionic/react";
import { useEffect, useState } from "react";
import { MEDICAL_RECORDS } from "../../../../lib/data";
import LabResultCardItem from "../../../ui/lab-results/LabResultCardItem";
import NoRecordStatus from "../../../ui/medical-records/NoRecordStatus";

const PersonalRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const records = MEDICAL_RECORDS.filter(
      (record) => record.type === "personal"
    );
    setRecords(records);
  }, []);

  return (
    <IonPage>
      <TopHeader pageName={"Personal Records"} back />
      <IonContent>
        <Container>
          {records.length > 0 ? (
            <div className="flex flex-col justify-center items-center my-4">
              {records.map((record) => (
                <LabResultCardItem key={record.id} result={record} />
              ))}
            </div>
          ) : (
            <NoRecordStatus status="No Personal Records" />
          )}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default PersonalRecords;
