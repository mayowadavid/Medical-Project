import { SmallText, MediumText } from "../core/Text";

interface ViewInformationFieldProps {
  label: string;
  value: string | Date | number;
  suffix?: string;
}
export const ViewInformationField = ({
  label,
  value,
  suffix,
}: ViewInformationFieldProps) => {
  return (
    <div className="flex flex-col w-full items-start justify-between border-b py-4 border-slate-300 px-2">
      <div className="flex flex-col items-start justify-center mb-1">
        <MediumText classes="font-general text-slate-700">{label}</MediumText>
      </div>
      <div className="flex flex-row w-full justify-start ">
        <MediumText classes="font-title font-semibold text-slate-700">
          {value}
        </MediumText>
        {suffix && (
          <SmallText classes="font-general text-slate-700 ml-1">
            {suffix}
          </SmallText>
        )}
      </div>
    </div>
  );
};
