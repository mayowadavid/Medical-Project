import { Link } from "react-router-dom";
import { Card } from "../core/Card";
import { FadedMediumText } from "../core/Text";

interface GPCardProps {
  text: string;
  icon: string;
  classes?: string;
  href: string;
}

const GPCard = ({ icon, text, classes, href }: GPCardProps) => {
  return (
    <Link to={href}>
      <Card classes={classes}>
        <div className="my-4 border w-24 h-24 bg-tertiary-50 mx-auto rounded-full flex justify-center items-center">
          <img src={icon} alt="doctor" className="h-16 w-16" />
        </div>
        <FadedMediumText classes="px-12 text-center mb-3">
          {text}
        </FadedMediumText>
      </Card>
    </Link>
  );
};

export default GPCard;
