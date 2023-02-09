import { Link } from "react-router-dom";
import { Card } from "../core/Card";
import { FadedSmallText, MediumText } from "../core/Text";

const Category = ({ name, img_url, route }) => {
  return (
    <Link to={route}>
      <Card classes={"px-4 py-4"}>
        <img src={img_url} alt="myhc" className="rounded-md h-24" />
        <div className="mt-2">
          <MediumText>{name}</MediumText>
          <FadedSmallText>lorem ipsum dolor amet si</FadedSmallText>
        </div>
      </Card>
    </Link>
  );
};

export default Category;
