import Container from "../../../ui/layouts/Container";
import { TopHeader } from "../../../ui/layouts/Headers";
import { IonPage, IonContent } from "@ionic/react";
import Tabs from "../../../ui/core/Tabs";
import MyRecords from "../../../ui/medical-records/NoRecordStatus";
import { useEffect, useState } from "react";
import { MEDICAL_RECORDS } from "../../../../lib/data";
import LabResultCardItem from "../../../ui/lab-results/LabResultCardItem";
import NoRecordStatus from "../../../ui/medical-records/NoRecordStatus";

const Radiology = () => {
  const [radiology, setRadiology] = useState([]);

  useEffect(() => {
    const radiology = MEDICAL_RECORDS.filter(
      (record) => record.type === "radiology"
    );
    setRadiology(radiology);
  }, []);

  //group radiology by userUploaded
  const radiologyByUser = radiology.reduce(
    (acc, rad) => {
      if (rad.userUploaded === true) {
        acc.userUploaded.push(rad);
      } else if (rad.userUploaded === false) {
        acc.notUserUploaded.push(rad);
      }
      return acc;
    },
    { userUploaded: [], notUserUploaded: [] }
  );

  const [selectedTab, setSelectedTab] = useState(0);

  const tabToRender = () => {
    if (selectedTab === 0) {
      if (radiologyByUser.notUserUploaded.length > 0) {
        return radiologyByUser.notUserUploaded.map((result) => (
          <LabResultCardItem key={result.id} result={result} />
        ));
      } else {
        return <NoRecordStatus status="No Radiology Results" />;
      }
    } else {
      if (radiologyByUser.userUploaded.length > 0) {
        return radiologyByUser.userUploaded.map((result) => (
          <LabResultCardItem key={result.id} result={result} />
        ));
      } else {
        return <NoRecordStatus status="No Radiology Results" />;
      }
    }
  };

  return (
    <IonPage>
      <TopHeader pageName={"Radiology"} back />
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

export default Radiology;
