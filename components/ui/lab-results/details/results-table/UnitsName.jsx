import { SmallText } from "../../../core/Text";

const UnitsName = ({ name, units }) => {
  return (
    <td className="p-3 text-sm">
      <SmallText>{name}</SmallText>
      <span className="text-gray-500 text-xs font-semibold">({units})</span>
    </td>
  );
};

export default UnitsName;
