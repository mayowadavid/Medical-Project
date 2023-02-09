import useModal from "../../../../lib/hooks/useModal";
import { BottomSheetModal } from "./Modal";

interface SeeAllSpecialitiesModalProps {
  children: React.ReactNode;
}
const SeeAllSpecialitiesModal = ({
  children,
}: SeeAllSpecialitiesModalProps) => {
  const { openModal } = useModal();

  return (
    <BottomSheetModal
      isOpen={openModal === "see-all-specialities"}
      title="Select a Specialist"
    >
      {children}
    </BottomSheetModal>
  );
};

export default SeeAllSpecialitiesModal;
