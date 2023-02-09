import { SubHeadingText } from "../core/Text";
import PropTypes from "prop-types";

const OrderStatus = ({ order }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-center">
      {order?.status === "cancelled" ? (
        <div className="flex flex-col justify-center items-center my-2 mx-center">
          <SubHeadingText classes="font-semibold my-4 text-tertiary-100">
            Order Cancelled
          </SubHeadingText>
          <img
            src="/assets/images/appointment/cancelled-animate.svg"
            alt="success"
            className="w-60 h-60"
          />
        </div>
      ) : order?.status === "completed" ? (
        <div className="flex flex-col justify-center items-center my-2 mx-center">
          <SubHeadingText classes="font-semibold my-4 text-tertiary-100">
            Order Completed
          </SubHeadingText>
          <img
            src="/assets/images/appointment/completed-animate.svg"
            alt="success"
            className="w-60 h-60"
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-2 mx-center">
          <SubHeadingText classes="font-semibold my-4 text-tertiary-100">
            Order Confirmed
          </SubHeadingText>
          <img
            src="/assets/images/appointment/confirmed-animate.svg"
            alt="success"
            className="w-60 h-60"
          />
        </div>
      )}
    </div>
  );
};

OrderStatus.propTypes = {
  order: PropTypes.object,
};

OrderStatus.defaultProps = {
  order: {},
};

export default OrderStatus;
