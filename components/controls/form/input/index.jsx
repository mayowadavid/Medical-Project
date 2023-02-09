import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";

/*
  Note:
    - value of form/input is mainly controlled by parent component
    - mainly used in Form
*/
const Input = forwardRef(
  ({ className, name, isError, onChange, ...otherProps }, ref) => {
    const _onChange = useCallback(
      (event) => {
        if (name) {
          // mainly catering for form (a single state in object with different key-value-pairs to support different input boxes) when using "register" by react-hook-form
          onChange(name, event.target.value);
        } else {
          onChange(event);
        }
      },
      [name, onChange]
    );

    return (
      <input
        ref={ref}
        className={`
        width--full-100
        border-radius--5
        pt-[5px]
        focus:outline-none
        ${!isError ? "border--1-solid-grey-light" : "border--1-solid-danger"}
        ${className}
      `}
        onChange={_onChange}
        {...otherProps}
      />
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: "",
  name: "",
  value: "",
  placeholder: "",
  isError: false,
  disabled: false,
  onChange: () => {},
};

Input.displayName = "Input";

export default Input;
