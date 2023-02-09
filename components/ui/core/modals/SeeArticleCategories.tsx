import useModal from "../../../../lib/hooks/useModal";
import { BottomSheetModal } from "./Modal";

interface SeeArticleCategoriesProps {
  children: React.ReactNode;
}

const SeeArticleCatgories = ({ children }: SeeArticleCategoriesProps) => {
  const { openModal } = useModal();
  return (
    <BottomSheetModal
      isOpen={openModal === "see-article-categories"}
      title="Select a Category"
    >
      {children}
    </BottomSheetModal>
  );
};

export default SeeArticleCatgories;
