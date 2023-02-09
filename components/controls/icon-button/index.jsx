import React from "react";
import PropTypes from "prop-types";

const IconButton = ({ className, iconName, iconColor, disabled, onClick }) => (
  <button className={className} onClick={onClick} disabled={disabled}>
    <ion-icon name={iconName} color={iconColor}></ion-icon>
  </button>
);

IconButton.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  className: "",
  iconName: "",
  iconColor: "",
  disabled: false,
  onClick: () => {},
};

export default IconButton;
