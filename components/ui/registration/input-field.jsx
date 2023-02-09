import PropTypes from "prop-types";

const InputField = ({ id, placeholder, type, onChange, value }) => {
  return (
    <div className="flex flex-row mb-4 justify-between items-center text-center border-b border-secondary-50 w-[18rem]">
      <input
        id={id}
        className="w-full p-2 px-3 bg-transparent focus:bg-transparent focus:outline-none"
        type={type}
        placeholder={placeholder}
        name={id}
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

InputField.defaultProps = {
  id: "",
  placeholder: "",
  type: "",
  onChange: () => {},
};

InputField.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
