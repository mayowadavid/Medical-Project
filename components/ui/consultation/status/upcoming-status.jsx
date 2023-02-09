import { SubHeadingText } from "../../core/Text";
import PropTypes from "prop-types";

import { MdOutlineUpcoming } from "react-icons/md";

const UpcomingStatus = ({ status }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-36">
      <MdOutlineUpcoming className="w-24 h-24 text-primary-50 m-2" />
      <SubHeadingText classes="font-title font-semibold m-2">
        {status}
      </SubHeadingText>
    </div>
  );
};

UpcomingStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

UpcomingStatus.defaultProps = {
  status: "",
};

export default UpcomingStatus;
