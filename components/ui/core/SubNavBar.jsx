import React from "react";
import PropTypes from "prop-types";

const SubNavBar = ({ className, children }) => (
  <div
    className={`sticky top-0 bg-white z-40 border-x-0 m-[0 -5.55%]${className}`}
  >
    <div className="border--1-solid-grey-light">
      <div className="m-0 w-[90%] max-w-[1200px]">{children}</div>
    </div>
  </div>
);

SubNavBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

SubNavBar.defaultProps = {
  className: "",
  children: <></>,
};

export default SubNavBar;
