import { Button } from "../core/Buttons";
import Floater from "../core/Floater";
import Link from "react-router-dom";
interface FloaterButtonProps {
  appointmentId: string;
  status: string;
  slug: string;
  openModal: () => void;
}

const FloaterButton = ({
  appointmentId,
  status,
  openModal,
}: FloaterButtonProps) => {
  return (
    <>
      {status === "cancelled" ? (
        <Floater classes="flex flex-row items-center justify-between mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded"
            handleClick={() => console.log("Ordering this package")}
          >
            Order this package again
          </Button>
        </Floater>
      ) : status === "completed" ? (
        <Floater classes="flex flex-row items-center justify-between mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded"
            handleClick={() => console.log("Viewing prescriptions")}
          >
            View Prescription/s
          </Button>
        </Floater>
      ) : (
        <Floater classes="flex flex-row items-center justify-between mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded mr-2"
            handleClick={openModal}
          >
            Cancel
          </Button>
          <Button
            classes="w-full font-semibold py-2 px-4 rounded ml-2"
            primary={true}
            // href={`/appointment/reschedule/${appointmentId}`}
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
