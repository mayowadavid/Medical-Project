import useModal from "../../../../lib/hooks/useModal";
import { AlertModal } from "./Modal";

interface CancelAppointmentModalProps {
  destructive?: boolean;
}

const CancelAppointmentModal = ({
  destructive,
}: CancelAppointmentModalProps) => {
  const { openModal } = useModal();
  return (
    <AlertModal
      isOpen={openModal === "cancel-appointment"}
      title={"Cancel Appointment"}
      message={"Are you sure you want to cancel this appointment?"}
      buttons={[
        {
          text: "No",
          role: "cancel",
          handler: () => console.log("close modal"),
        },
        {
          text: "Yes",
          role: destructive && "destructive",
          handler: () => console.log("yes click"),
        },
      ]}
    />
  );
};

export default CancelAppointmentModal;
