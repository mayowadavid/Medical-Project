import {
  FadedMediumText,
  FadedRegularText,
  MediumText,
  RegularText,
} from "../core/Text";

const BillDetails = () => {
  return (
    <div className="flex flex-col">
      <RegularText>Bill Details</RegularText>
      <div className="flex justify-between">
        <FadedMediumText>Consultation Fee</FadedMediumText>
        <MediumText>S$100</MediumText>
      </div>
      <div className="flex justify-between">
        <FadedMediumText>Service charge and tax</FadedMediumText>
        <MediumText>S$5</MediumText>
      </div>
      <div className="flex justify-between">
        <FadedMediumText>Coupon discount</FadedMediumText>
        <MediumText>-S$25</MediumText>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between">
        <FadedRegularText>Total Payable</FadedRegularText>
        <RegularText>S$80</RegularText>
      </div>
    </div>
  );
};

export default BillDetails;
