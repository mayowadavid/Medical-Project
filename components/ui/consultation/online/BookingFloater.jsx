import { Button } from "../../core/Buttons";
import Floater from "../../core/Floater";
import { FadedSmallText, FadedRegularText } from "../../core/Text";

const BookingFloater = () => {
  return (
    <Floater>
      <div className="flex items-center">
        <FadedRegularText classes={"font-semibold"}>S$80</FadedRegularText>
        <FadedSmallText classes={"text-blue-600 font-semibold underline mx-2"}>
          View
        </FadedSmallText>
      </div>
      <Button href="/order-confirmation">Pay and book</Button>
    </Floater>
  );
};

export default BookingFloater;
