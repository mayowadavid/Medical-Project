import { Link } from "react-router-dom";
import { Card } from "../core/Card";
import { MediumText } from "../core/Text";

const AccountCard = ({ account, method }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {account.map((account, id) => (
        <Link to={account.link} key={id}>
          <Card classes={`flex w-[18rem] items-center ${account.color}`}>
            <img
              className="h-7 w-7 mx-4 object-cover"
              src={account.icon}
              alt={account.name}
              width={64}
              height={64}
              quality={100}
            />
            <MediumText classes="m-2 text-center text-white font-general">
              {method} {account.name}
            </MediumText>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default AccountCard;
