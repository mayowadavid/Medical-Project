import { Dispatch, SetStateAction } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
interface FormInputProps {
  inputState: any;
  setInputState: Dispatch<SetStateAction<any>>;
  inputType?: string;
  inputClasses?: string;
  placeholder?: string;
  noShadow?: boolean;
  disabled?: boolean;
  rows?: number;
  enterFunction?: any;
  showError?: boolean;
  showPassword?: boolean;
  errorText?: string;
  validateFunction?: (value: string | number | boolean) => boolean;
  setShowPassword?: Dispatch<SetStateAction<boolean>>;
}

const FormInput = ({
  inputState,
  setInputState,
  inputType,
  inputClasses,
  placeholder,
  noShadow,
  disabled,
  rows,
  enterFunction,
  showError,
  errorText,
  validateFunction,
  showPassword,
  setShowPassword,
}: FormInputProps) => {
  return (
    <div className="w-full flex flex-col">
      {rows ? (
        <textarea
          rows={rows}
          disabled={disabled}
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          className={`w-full ${
            !noShadow && "drop-shadow"
          } resize-none shadow-inner px-4 py-2.5 rounded-lg border border-back text-light text-base outline-none ${inputClasses}`}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (enterFunction && e.key == "Enter") {
              enterFunction();
            }
          }}
          onBlur={() => {
            console.log("blur");
            if (validateFunction) validateFunction(inputState);
          }}
        />
      ) : (
        <div
          className={`flex items-center shadow-inner px-4 py-2.5 rounded-lg border border-back text-light text-base outline-none ${inputClasses}`}
        >
          <input
            disabled={disabled}
            type={
              inputType == "password"
                ? showPassword
                  ? "text"
                  : "password"
                : inputType
                ? inputType
                : "text"
            }
            value={inputState}
            onChange={(e) => setInputState(e.target.value)}
            className="w-full outline-none"
            placeholder={placeholder}
            onKeyDown={(e) => {
              if (enterFunction && e.key == "Enter") {
                enterFunction();
              }
            }}
            onBlur={() => {
              if (validateFunction) validateFunction(inputState);
            }}
          />
          {inputType == "password" &&
            (showPassword ? (
              <AiFillEyeInvisible
                onClick={() => setShowPassword(false)}
                size="20px"
                className="cursor-pointer"
              />
            ) : (
              <AiFillEye
                onClick={() => setShowPassword(true)}
                size="20px"
                className="cursor-pointer"
              />
            ))}
        </div>
      )}
      {showError && errorText && !validateFunction(inputState) && (
        <div className="text-error mt-1">{errorText}</div>
      )}
    </div>
  );
};

export default FormInput;
