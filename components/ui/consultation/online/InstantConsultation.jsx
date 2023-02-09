import { Button } from "../../core/Buttons";
import { Card } from "../../core/Card";
import {
  FadedMediumText,
  MediumText,
  RegularText,
  SmallText,
} from "../../core/Text";
import Image from "next/image";

const InstantConsultation = () => {
  return (
    <Card classes={"py-4 px-4"}>
      <div className="bg-primary-50 rounded flex justify-center py-6 px-4">
        <div className="bg-white rounded-half px-4 py-3">
          <img src={"/icons/call-plus.png"} alt="myhc" width={60} height={60} />
        </div>
      </div>
      <RegularText classes={"font-semibold mt-4"}>
        Consult A Doctor Online Now
      </RegularText>
      <MediumText classes={"my-4"}>
        Book an instant video consultation with a General Physician to take care
        of your urgent health needs.
      </MediumText>
      <div className="flex items-center">
        <FadedMediumText classes={"font-semibold"}>S$100</FadedMediumText>
        <SmallText>&nbsp;per consultation</SmallText>
      </div>
      <Button
        full
        classes={"mt-4"}
        href={"/online-consultation/book-consultation"}
      >
        Request Consultation
      </Button>
    </Card>
  );
};

export default InstantConsultation;
