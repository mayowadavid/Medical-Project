import { FullScreenModal } from "./Modal";
import useModal from "../../../../lib/hooks/useModal";

interface AddRecordModalProps {
  children: React.ReactNode;
  type: string;
}

const AddRecordModal = ({ children, type }: AddRecordModalProps) => {
  const { openModal } = useModal();
  return (
    <FullScreenModal
      isOpen={openModal === `add-${type}-record`}
      title={"Add Medical Record"}
    >
      {children}
    </FullScreenModal>
  );
};

export default AddRecordModal;
