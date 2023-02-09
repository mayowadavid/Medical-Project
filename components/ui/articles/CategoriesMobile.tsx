import { IonGrid, IonRow } from "@ionic/react";
import CategoryCircle from "../../ui/articles/CategoryCircle";
import AllCategoriesCircleItems from "../../../components/ui/articles/AllCategoriesCircleItems";
import { categoryNames } from "../../../lib/constants/categoryNames";
import useModal from "../../../lib/hooks/useModal";
import { Button } from "../core/Buttons";
import formatTitle from "../../../lib/hooks/formatTitle";
import SeeArticleCategories from "../core/modals/SeeArticleCategories";
import { useLocation } from "react-router-dom";

const CategoriesMobile = () => {
  const { openModal, setModal, closeModal } = useModal();
  const { pathname: params } = useLocation();

  const isActive = (category: string) => {
    return params == category;
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 py-2">
        {categoryNames.slice(0, 4).map((categoryName, idx) => (
          <CategoryCircle
            key={idx}
            name={formatTitle(categoryName.name)}
            icon={categoryName.icon}
            href={categoryName.route}
            isActive={isActive(categoryName.route)}
          />
        ))}
      </div>
      <Button
        handleClick={() => {
          setModal("see-article-categories");
        }}
        full
        classes={"mt-1"}
      >
        See All Categories
      </Button>
      <SeeArticleCategories>
        <IonGrid fixed>
          <IonRow>
            {categoryNames.map((category, idx) => (
              <AllCategoriesCircleItems
                key={idx}
                icon={category.icon}
                name={formatTitle(category.name)}
                href={category.route}
                closeModal={closeModal}
                isActive={isActive(category.route)}
              />
            ))}
          </IonRow>
        </IonGrid>
      </SeeArticleCategories>
    </div>
  );
};

export default CategoriesMobile;
