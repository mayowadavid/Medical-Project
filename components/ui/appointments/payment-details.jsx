import { RegularText } from "../core/Text";
import ViewPaymentField from "./view-payment-field";

const AppointmentPaymentDetails = () => {
  return (
    <div className="flex flex-col mb-4">
      <RegularText classes="font-title mt-4 mb-2">Payment Details</RegularText>
      <div className="flex flex-col justify-start px-4 py-2 rounded bg-secondary-5">
        <ViewPaymentField label="Service Fee" value="FREE" />
        <ViewPaymentField label="Medical Service Fee" value="S$280" />
        <ViewPaymentField label="Payment Received" value="S$280" />
        <ViewPaymentField label="Payment Method" value="e-wallet" />
        <ViewPaymentField label="Payment Status" value="Paid" />
      </div>
    </div>
  );
};

export default AppointmentPaymentDetails;
