import { SubHeadingText } from "../../core/Text";
import SymptomsList from "../SymptomsList";

const BookAppointment = () => {
  return (
    <div className="my-6">
      <SubHeadingText>Book an appointment for later</SubHeadingText>
      <SymptomsList />
    </div>
  );
};

export default BookAppointment;
