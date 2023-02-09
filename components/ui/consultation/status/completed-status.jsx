import { SubHeadingText } from "../../core/Text";
import PropTypes from "prop-types";

import { IoMdDoneAll } from "react-icons/io";

const CompletedStatus = ({ status }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-36">
      <IoMdDoneAll className="w-24 h-24 text-primary-50 m-2" />
      <SubHeadingText classes="font-title font-semibold m-2">
        {status}
      </SubHeadingText>
    </div>
  );
};

CompletedStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

CompletedStatus.defaultProps = {
  status: "",
};

export default CompletedStatus;
