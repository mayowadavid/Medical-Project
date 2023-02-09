import BookingFloater from "../consultation/online/BookingFloater";
import BookingSummary from "../consultation/online/BookingSummary";
import PromoInput from "../consultation/online/PromoInput";

interface SummaryProps {}

const Summary = ({}: SummaryProps) => {
  return (
    <div>
      <BookingSummary />
      <PromoInput handlePromoApply={(code) => console.log(code)} />
      <BookingFloater />
    </div>
  );
};

export default Summary;
