import useModal from "../../../../lib/hooks/useModal";
import { AlertModal } from "./Modal";

const CheckDoctorAvailability = ({ destructive, mailBtnRef }) => {
  const { openModal } = useModal();
  return (
    <AlertModal
      isOpen={openModal === "doctor-availability"}
      title={"Check Availability"}
      message={"Enquire about this doctor's availability."}
      buttons={[
        {
          text: "Virtual",
          role: destructive && "destructive",
          handler: () => mailBtnRef.current.click(),
        },
        {
          text: "In Person",
          role: destructive && "destructive",
          handler: () => mailBtnRef.current.click(),
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => console.log("close modal"),
        },
      ]}
    />
  );
};

export default CheckDoctorAvailability;
