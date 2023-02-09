import Container from "../../../ui/layouts/Container";
import { TopHeader } from "../../../ui/layouts/Headers";
import { IonPage, IonContent } from "@ionic/react";
import Tabs from "../../../ui/core/Tabs";
import MyRecords from "../../../ui/medical-records/NoRecordStatus";
import { useEffect, useState } from "react";
import { MEDICAL_RECORDS } from "../../../../lib/data";
import LabResultCardItem from "../../../ui/lab-results/LabResultCardItem";
import NoRecordStatus from "../../../ui/medical-records/NoRecordStatus";

const LabResults = () => {
  const [lab, setLab] = useState([]);

  useEffect(() => {
    const lab = MEDICAL_RECORDS.filter((record) => record.type === "lab-test");
    setLab(lab);
  }, []);

  //group lab by userUploaded
  const labByUser = lab.reduce(
    (acc, lab) => {
      if (lab.userUploaded === true) {
        acc.userUploaded.push(lab);
      } else if (lab.userUploaded === false) {
        acc.notUserUploaded.push(lab);
      }
      return acc;
    },
    { userUploaded: [], notUserUploaded: [] }
  );

  const [selectedTab, setSelectedTab] = useState(0);

  const tabToRender = () => {
    if (selectedTab === 0) {
      if (labByUser.notUserUploaded.length > 0) {
        return labByUser.notUserUploaded.map((result) => (
          <LabResultCardItem key={result.id} result={result} />
        ));
      } else {
        return <NoRecordStatus status="No Lab Results" />;
      }
    } else {
      if (labByUser.userUploaded.length > 0) {
        return labByUser.userUploaded.map((result) => (
          <LabResultCardItem key={result.id} result={result} />
        ));
      } else {
        return <NoRecordStatus status="No Lab Results" />;
      }
    }
  };

  return (
    <IonPage>
      <TopHeader pageName={"Lab Results"} back />
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

export default LabResults;
