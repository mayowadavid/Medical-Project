import { FadedMediumText, MediumText, SubHeadingText } from "../../core/Text";

interface OrderDerailsProps {
  orderName: string;
  amount: number;
}

const OrderDetails = ({ orderName, amount }: OrderDerailsProps) => {
  return (
    <div>
      <SubHeadingText>Order placed successfully</SubHeadingText>

      <div className=" border border-gray-300 rounded-lg px-4 py-2 my-4">
        <MediumText>{orderName}</MediumText>
        <div className="flex justify-between">
          <FadedMediumText>Amount Paid</FadedMediumText>
          <MediumText>${amount}</MediumText>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
