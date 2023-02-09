import { MediumText } from "./Text";

interface TabProps {
  tabs: string[];
  selected?: number;
  handleSelectTab?: (a: number) => void;
  classes?: string;
}

const Tabs = ({ tabs, selected, handleSelectTab, classes }: TabProps) => {
  return (
    <div className="flex mx-auto">
      {tabs.map((tab, idx) => (
        <div
          className={`border border-secondary-100 px-4 py-2 ${
            idx === 0 ? "rounded-l-lg border-r-0" : ""
          } ${idx === tabs.length - 1 ? "rounded-r-lg border-l-0" : ""} ${
            selected === idx ? "bg-secondary-100 text-white" : ""
          } ${classes}`}
          key={idx}
          onClick={() => handleSelectTab(idx)}
        >
          <MediumText>{tab}</MediumText>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
