import { IonCol } from "@ionic/react";
import { Link } from "react-router-dom";
import { FadedSmallText, SmallText } from "../core/Text";

interface CategoriesCircleProps {
  icon: string;
  name: string;
  categoryId?: string;
  closeModal: () => void;
  href: string;
  isActive: boolean;
}

const AllCategoriesCircleItems = ({
  icon,
  name,
  href,
  closeModal,
  isActive,
}: CategoriesCircleProps) => {
  return (
    <IonCol size="4" onClick={closeModal}>
      {isActive ? (
        <Link to={href} className="flex flex-col items-center mb-2">
          <div className="p-2 bg-primary-100 rounded-full mb-2 border border-gray-300">
            <img
              style={{
                filter:
                  "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%)",
              }}
              src={icon}
              width={25}
              height={25}
              alt="myhc"
            />
          </div>
          <SmallText classes="text-center">{name}</SmallText>
        </Link>
      ) : (
        <Link to={href} className="flex flex-col items-center mb-2">
          <div className="p-2 bg-slate-50 rounded-full mb-2">
            <img src={icon} width={25} height={25} alt="myhc" />
          </div>
          <FadedSmallText classes="text-center">{name}</FadedSmallText>
        </Link>
      )}
    </IonCol>
  );
};

export default AllCategoriesCircleItems;
