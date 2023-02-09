import useModal from "../../../../lib/hooks/useModal";
import { BottomSheetModal } from "./Modal";

const AppointmentFilterModal = ({ children, handleClose }) => {
  const { openModal } = useModal();
  return (
    <BottomSheetModal
      isOpen={openModal === "appointment-filters"}
      closeText="APPLY"
      handleClose={handleClose}
      title="Appointment Status"
    >
      {children}
    </BottomSheetModal>
  );
};

export default AppointmentFilterModal;
