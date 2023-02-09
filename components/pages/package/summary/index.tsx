import { IonContent, IonPage } from "@ionic/react";
import { useRecoilValue } from "recoil";
import { SelectedPackage } from "../../../../recoil/atoms";
import BookingFloater from "../../../ui/consultation/online/BookingFloater";
import PromoInput from "../../../ui/consultation/online/PromoInput";
import { HeadingText } from "../../../ui/core/Text";
import Container from "../../../ui/layouts/Container";
import { TopHeader } from "../../../ui/layouts/Headers";
import BillDetails from "../../../ui/package-summary/BillDetails";
import PackageDetails from "../../../ui/package-summary/PackageDetails";
import PatientDetails from "../../../ui/package-summary/PatientDetails";

const PackageSummary = () => {
  const selectedPackage = useRecoilValue(SelectedPackage);

  return (
    <IonPage className="font-general">
      <TopHeader pageName={"Package Summary"} back />
      <IonContent>
        <Container>
          <PackageDetails pack={selectedPackage} />
          <div className="flex flex-col w-full justify-center items-center mt-4 border-2 border-secondary-100 rounded-lg p-2">
            <HeadingText classes={"text-primary-100"}>
              S${selectedPackage.totalPrice ?? selectedPackage.packagePrice}
            </HeadingText>
          </div>
          <PatientDetails />
          <BillDetails />
          <PromoInput handlePromoApply={(code) => console.log(code)} />
          <BookingFloater />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default PackageSummary;
