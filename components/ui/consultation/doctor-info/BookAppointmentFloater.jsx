import { Button } from "../../core/Buttons";
import Floater from "../../core/Floater";

const BookAppointmentFloater = () => {
  return (
    <Floater>
      <Button primary href="/doctors/book-appointment/1" hover>
        Book Appointment
      </Button>
      <Button href="/online-consultation/book-consultation" hover>
        Consult Now
      </Button>
    </Floater>
  );
};

export default BookAppointmentFloater;
