import { SubHeadingText } from "../core/Text";
import Category from "./Category";
import { CATEGORIES } from "../../../lib/data";

const Categories = () => {
  return (
    <div>
      <SubHeadingText classes={"py-2"}>Categories</SubHeadingText>
      <div className="grid grid-cols-2 gap-2">
        {CATEGORIES.map((category, idx) => (
          <Category
            name={category.name}
            img_url={category.img_url}
            route={category.route}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
