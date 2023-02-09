import Container from "../../../ui/layouts/Container";
import { TopHeader } from "../../../ui/layouts/Headers";
import { IonPage, IonContent } from "@ionic/react";
import Tabs from "../../../ui/core/Tabs";
// import MyRecords from "../../ui/records/MyRecords";
import { useEffect, useState } from "react";
import { MEDICAL_RECORDS } from "../../../../lib/data";
import LabResultCardItem from "../../../ui/lab-results/LabResultCardItem";
import NoRecordStatus from "../../../ui/medical-records/NoRecordStatus";

const Immunization = () => {
  const [immunization, setImmunization] = useState([]);

  useEffect(() => {
    const immunization = MEDICAL_RECORDS.filter(
      (record) => record.type === "immunization"
    );
    setImmunization(immunization);
  }, []);

  //group lab by userUploaded
  const immunizationByUser = immunization.reduce(
    (acc, immunization) => {
      if (immunization.userUploaded === true) {
        acc.userUploaded.push(immunization);
      } else if (immunization.userUploaded === false) {
        acc.notUserUploaded.push(immunization);
      }
      return acc;
    },
    { userUploaded: [], notUserUploaded: [] }
  );

  const [selectedTab, setSelectedTab] = useState(0);

  const tabToRender = () => {
    if (selectedTab === 0) {
      if (immunizationByUser.notUserUploaded.length > 0) {
        return immunizationByUser.notUserUploaded.map((result) => (
          <LabResultCardItem key={result.id} result={result} />
        ));
      } else {
        return <NoRecordStatus status="No Immunization Results" />;
      }
    } else {
      if (immunizationByUser.userUploaded.length > 0) {
        return immunizationByUser.userUploaded.map((result) => (
          <LabResultCardItem key={result.id} result={result} />
        ));
      } else {
        return <NoRecordStatus status="No Immunization Results" />;
      }
    }
  };

  return (
    <IonPage>
      <TopHeader pageName={"Immunization"} back />
      <IonContent>
        <Container>
          <div className="flex flex-col justify-center items-center mt-4 mb-8">
            <Tabs
              classes="mb-8"
              tabs={["MyHC Provider", "My Records"]}
              handleSelectTab={(id) => setSelectedTab(id)}
              selected={selectedTab}
            />
            {tabToRender()}
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Immunization;
