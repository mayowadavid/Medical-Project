import React from "react";
import PropTypes from "prop-types";
import ReactAvatar from "react-avatar";

const Avatar = ({ size, name, src, alt, circle, showBorder }) => (
  <ReactAvatar
    className={showBorder ? "border-solid border-2" : ""}
    size={size}
    name={name}
    src={src}
    alt={alt || name}
    round={circle ? true : "5px"}
  />
);

Avatar.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  circle: PropTypes.bool,
  showBorder: PropTypes.bool,
};

Avatar.defaultProps = {
  size: "6rem",
  name: "",
  src: "",
  alt: "",
  circle: true,
  showBorder: true,
};

export default Avatar;
