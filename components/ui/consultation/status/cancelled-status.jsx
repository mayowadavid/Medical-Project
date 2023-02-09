import { SubHeadingText } from "../../core/Text";
import PropTypes from "prop-types";

import { MdFreeCancellation } from "react-icons/md";

const CancelledStatus = ({ status }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-36">
      <MdFreeCancellation className="w-24 h-24 text-primary-50 m-2" />
      <SubHeadingText classes="font-title font-semibold m-2">
        {status}
      </SubHeadingText>
    </div>
  );
};

CancelledStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

CancelledStatus.defaultProps = {
  status: "",
};

export default CancelledStatus;
