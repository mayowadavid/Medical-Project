import { FullScreenModal } from "./Modal";
import useModal from "../../../../lib/hooks/useModal";
import { RegularText, SubHeadingText } from "../Text";

interface AppointmentDisclaimerModalProps {
  children: React.ReactNode;
}

const AppointmentDisclaimerModal = ({
  children,
}: AppointmentDisclaimerModalProps) => {
  const { openModal } = useModal();
  return (
    <FullScreenModal
      isOpen={openModal === "appointment-disclaimer"}
      title={"Medical Advice"}
    >
      {children}
    </FullScreenModal>
  );
};

export default AppointmentDisclaimerModal;
