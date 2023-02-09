import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { PersonalProfile } from "../../ui/profile-management/PersonalProfile";
import { MedicalProfile } from "../../ui/profile-management/MedicalProfile";
import { NOKProfile } from "../../ui/profile-management/NOKProfile";
import Tabs from "../../ui/core/Tabs";

import { useState, useCallback, useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";

import { Storage } from "@capacitor/storage";

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  const tabToRender = () => {
    if (selectedTab === 0) {
      {
        return <PersonalProfile isEdit={isEdit} toggleEdit={toggleEdit} />;
      }
    } else if (selectedTab === 1) {
      {
        return <MedicalProfile isEdit={isEdit} toggleEdit={toggleEdit} />;
      }
    } else {
      {
        return <NOKProfile isEdit={isEdit} toggleEdit={toggleEdit} />;
      }
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const getFirstName = async () => {
      const firstName = await Storage.get({ key: "firstName" });
      setFirstName(firstName.value);
    };
    const getLastName = async () => {
      const lastName = await Storage.get({ key: "lastName" });
      setLastName(lastName.value);
    };
    getFirstName();
    getLastName();
  }, [firstName, lastName]);

  const fullName = `${firstName} ${lastName}`;

  return (
    <IonPage>
      <TopHeader pageName={fullName} back={true} />
      <IonContent>
        <Container>
          <div className="flex justify-center mt-6">
            <Tabs
              tabs={["Personal", "Medical", "Next of Kin"]}
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

export default UserProfile;
