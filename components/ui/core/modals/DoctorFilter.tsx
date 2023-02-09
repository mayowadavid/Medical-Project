import useModal from "../../../../lib/hooks/useModal";
import { BottomSheetModal } from "./Modal";

const DoctorFilterModal = ({ children, handleClose }) => {
  const { openModal } = useModal();
  return (
    <BottomSheetModal
      isOpen={openModal === "doctor-filters"}
      closeText="APPLY"
      handleClose={handleClose}
      title="Filter doctors"
    >
      {children}
    </BottomSheetModal>
  );
};

export default DoctorFilterModal;
