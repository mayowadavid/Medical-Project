import useModal from "../../../lib/hooks/useModal";
import { Button } from "../core/Buttons";
import Floater from "../core/Floater";

interface FloaterButtonProps {
  appointmentId: string;
  status: string;
}

const FloaterButton = ({ appointmentId, status }: FloaterButtonProps) => {
  const { setModal } = useModal();
  return (
    <>
      {status === "cancelled" ? (
        <div> </div>
      ) : status === "completed" ? (
        <Floater classes="flex flex-row items-center justify-between mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded"
            handleClick={() => console.log("Viewing prescriptions")}
          >
            View Prescription
          </Button>
        </Floater>
      ) : (
        <Floater classes="flex flex-row items-center justify-between mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded mr-2"
            handleClick={() => setModal("cancel-appointment")}
          >
            Cancel
          </Button>
          <Button
            href={`/appointment/reschedule/${appointmentId}`}
            classes="w-full font-semibold py-2 px-4 rounded ml-2"
            primary={true}
            full={true}
            handleClick={() => console.log("Confirm Reschedule")}
          >
            Reschedule
          </Button>
        </Floater>
      )}
    </>
  );
};

export default FloaterButton;
