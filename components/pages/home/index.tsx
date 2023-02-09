import Banner from "../../ui/home/Banner";
import TeleheathServices from "../../ui/home/TeleheathServices";
import FeaturedArticles from "../../ui/home/FeaturedArticles";
import ExploreServices from "../../ui/home/ExploreServices";
import Appointments from "../../ui/home/Appointments";
import SpotlightSection from "../../ui/home/SpotlightSection";
import HomeFooter from "../../ui/home/HomeFooter";
import { IonContent, IonPage, isPlatform } from "@ionic/react";
import { TopHeader } from "../../ui/layouts/Headers";
import ProfileProgress from "../../ui/home/ProfileProgress";
import BookPackageCta from "../../ui/home/BookPackageAppointment";

const Home = () => {
  return (
    <IonPage>
      {isPlatform("ios") && <TopHeader home />}
      <IonContent>
        <div className="bg-tertiary-100 gap-y-4 flex flex-col">
          <Banner />
          <div className="flex flex-col gap-y-4 bg-white py-6 rounded-t-3xl">
            <Appointments />
            <ProfileProgress percentage={60} />
            <BookPackageCta />
            <ExploreServices />
            <TeleheathServices />
            <SpotlightSection />
            <FeaturedArticles />
            <HomeFooter />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
