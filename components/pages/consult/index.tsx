import Categories from "../../ui/consultation/Categories";
import SpecialitiesPreviewMenu from "../../ui/consultation/SpecialitiesPreviewMenu";
import SymptomsList from "../../ui/consultation/SymptomsList";
import { TopHeader } from "../../ui/layouts/Headers";
import { IonContent, IonPage } from "@ionic/react";
import Container from "../../ui/layouts/Container";

const Consult: React.FC = () => {
  return (
    <IonPage>
      <TopHeader pageName={"Consultation"} />
      <IonContent>
        <Container mainPage>
          <SpecialitiesPreviewMenu />
          {/* <SymptomsList /> */}
          {/* <Categories /> */}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Consult;
