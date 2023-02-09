import { MediumText } from "../core/Text";

interface ViewListFieldProps {
  label: string;
  value: any;
}
export const ViewListField = ({ label, value }: ViewListFieldProps) => {
  let valueString = value.map((item) => {
    return (
      <div
        className="inline-flex bg-secondary-100 rounded-lg m-1 py-1 px-3 shadow-md"
        key={item}
      >
        {item}
      </div>
    );
  });

  return (
    <div className="flex flex-col w-full items-start justify-between border-b py-4 border-slate-300 px-2">
      <div className="flex flex-col items-start justify-center mb-1">
        <MediumText classes="font-general text-slate-700">{label}</MediumText>
      </div>
      <div className="flex flex-row w-full justify-start mt-1">
        <MediumText classes="font-title font-semibold text-slate-700">
          {value.length > 0 ? valueString : "None"}
        </MediumText>
      </div>
    </div>
  );
};
