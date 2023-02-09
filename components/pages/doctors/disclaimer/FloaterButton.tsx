import Floater from "../../../ui/core/Floater";
import useModal from "../../../../lib/hooks/useModal";
import { Button } from "../../../ui/core/Buttons";

interface FloaterButtonProps {
  afterBookingAppointment: () => void;
}

const FloaterButton = ({ afterBookingAppointment }: FloaterButtonProps) => {
  const { closeModal } = useModal();
  const handleClick = () => {
    closeModal();
    afterBookingAppointment();
  };

  return (
    <>
      <Floater classes="flex flex-row items-center justify-between mt-4">
        <Button
          classes="mt-2 font-general font-semibold text-lg"
          full
          handleClick={handleClick}
        >
          Got it
        </Button>
      </Floater>
    </>
  );
};

export default FloaterButton;
