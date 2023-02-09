import PropTypes from "prop-types";
import { MediumText } from "../core/Text";

const ViewPaymentField = ({ label, value }) => {
  return (
    <div className="flex flex-row items-center justify-start my-1">
      <div className="flex w-1/2 items-center justify-start pl-2">
        <MediumText classes="font-general text-slate-700">{label}</MediumText>
      </div>
      <div className="flex w-1/2 items-start justify-end pr-2">
        {value === "FREE" && (
          <MediumText classes="font-general font-semibold text-teal-500">
            {value}
          </MediumText>
        )}
        {value !== "FREE" && (
          <MediumText classes="font-title text-slate-700">{value}</MediumText>
        )}
      </div>
    </div>
  );
};

ViewPaymentField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

ViewPaymentField.defaultProps = {
  label: "",
  value: "",
};

export default ViewPaymentField;
