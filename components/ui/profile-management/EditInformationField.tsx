import React from "react";
import { SmallText, MediumText } from "../core/Text";

interface EditInformationFieldProps {
  label: string;
  method: (e: React.FormEvent) => void | undefined;
  name: string;
  value: string | number;
  type?: string;
  options?: string[];
  suffix?: string;
  showError?: boolean;
  errorText?: string;
  validateFunction?: (value: string | number | boolean) => boolean;
}

export const EditInformationField = ({
  label,
  method,
  name,
  value,
  type,
  suffix,
  showError,
  errorText,
  validateFunction,
}: EditInformationFieldProps) => {
  return (
    <div className="flex flex-col w-full items-start justify-between border-b p-2 border-slate-300">
      <div className="flex flex-col items-start justify-center mb-1">
        <MediumText classes="font-general text-slate-700">{label}</MediumText>
      </div>
      <div className="flex flex-row justify-start w-full">
        <MediumText classes="w-full font-title font-semibold text-slate-700">
          <input
            className="flex p-2 w-full bg-secondary-5 rounded-md"
            style={{
              textAlign: "left",
              outline: "none",
              border: "none",
            }}
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={method}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (validateFunction) validateFunction(value);
              }
            }}
            onBlur={(e) => {
              if (validateFunction) validateFunction(value);
            }}
          />
        </MediumText>
        {suffix && (
          <SmallText classes="ml-4 font-general text-slate-700">
            {suffix}
          </SmallText>
        )}
      </div>
      {showError && !validateFunction(value) && (
        <SmallText classes="font-general text-red-500 mt-1 ml-2">
          {errorText}
        </SmallText>
      )}
    </div>
  );
};
