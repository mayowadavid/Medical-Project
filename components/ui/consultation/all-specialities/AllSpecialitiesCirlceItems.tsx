import { IonCol } from "@ionic/react";
import { Link } from "react-router-dom";
import { FadedSmallText } from "../../core/Text";

interface SpecialitiesCircleProps {
  icon: string;
  name: string;
  specialityId?: string;
  closeModal: () => void;
  href: string;
}

const AllSpecialitiesCirlceItems = ({
  icon,
  name,
  href,
  closeModal,
}: SpecialitiesCircleProps) => {
  return (
    <IonCol size="4" onClick={closeModal}>
      <Link to={href} className="flex flex-col items-center mb-2">
        <div className="p-2 bg-slate-50 rounded-full mb-2">
          <img src={icon} width={25} height={25} alt="myhc" />
        </div>
        <FadedSmallText classes="text-center">{name}</FadedSmallText>
      </Link>
    </IonCol>
  );
};

export default AllSpecialitiesCirlceItems;
