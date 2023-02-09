import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  primary?: boolean;
  full?: boolean;
  hover?: boolean;
  disabled?: boolean;
  classes?: string;
  handleClick?: (params?: any) => void;
}

export const Button = ({
  href,
  children,
  primary,
  full,
  hover,
  classes,
  handleClick,
  disabled,
}: ButtonProps) => {
  return href != undefined ? (
    <Link to={href} className={`${full ? "w-full" : ""}`}>
      <button
        disabled={disabled}
        className={`px-6 py-2 my-2 rounded text-white w-full ${
          hover ? "hover:scale-105 hover:shadow-md" : ""
        }  ${primary ? "bg-primary-100" : "bg-secondary-100"} ${classes} ${
          disabled && "bg-gray-300"
        }`}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      disabled={disabled}
      className={`px-6 py-2 my-2 rounded text-white ${
        hover ? "hover:scale-105 hover:shadow-md" : ""
      } ${primary ? "bg-primary-100" : "bg-secondary-100"} ${
        full ? "w-full" : ""
      } ${classes} ${disabled && "bg-gray-300"}`}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
};

export const OutlinedButton = ({
  href,
  children,
  primary,
  full,
  classes,
  handleClick,
}: ButtonProps) => {
  return href != undefined ? (
    <Link to={href} className={`${full ? "w-full" : ""}`}>
      <button
        className={`px-6 py-2 my-2 rounded border w-full ${
          primary ? "border-primary-100" : "border-secondary-100"
        } ${classes}`}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={`px-6 py-2 my-2 rounded outline outline-1 font-semibold ${
        primary
          ? "border-primary-100 text-primary-100"
          : "outline-secondary-100 text-secondary-100"
      } ${full ? "w-full" : ""} ${classes}`}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
};
