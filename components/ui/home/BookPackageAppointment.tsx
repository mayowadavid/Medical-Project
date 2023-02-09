import { Button } from "../core/Buttons";
import { MediumText, SubHeadingText } from "../core/Text";
import { Link } from "react-router-dom";
import { ORDERS, ITEMS, CASES } from "../../../lib/data";

const BookPackageCta = () => {
  const allMappedOrders = () => {
    return ORDERS.map((order) => {
      const mappedOrder = {
        ...order,
        package: ITEMS.find((item) => item.id == order?.basket[0]?.itemId),
        case: CASES.find((case_) =>
          case_.orderIds.includes(order.id.toString())
        ),
      };
      return mappedOrder;
    });
  };

  const filteredOrders = allMappedOrders().filter(
    (order) => order.case?.appointmentIds.length === 0
  );

  return (
    <div className="border border-gray-300 rounded-2xl mx-4 shadow-md">
      <div className="bg-gray-100 rounded-2xl">
        <div className="py-2 px-4 lg:flex lg:items-center lg:justify-between backdrop-blur-[1px]">
          <MediumText classes="block text-cardTypo pt-3 font-title">
            Your recent order
          </MediumText>
          {filteredOrders.map((filteredOrder, index) => {
            if (index < 1)
              return (
                <SubHeadingText
                  classes="text-primary-100 font-title"
                  key={index}
                >
                  {filteredOrder.package?.name}
                </SubHeadingText>
              );
          })}
          <MediumText classes="block text-cardTypo pt-3">
            Book your first appointment.
          </MediumText>
          <div className="mt-3">
            <Link to="#">
              <Button
                classes="font-general"
                primary
                full
                handleClick={() => {}}
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPackageCta;
