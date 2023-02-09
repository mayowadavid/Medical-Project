import InputGraphs from "./InputGraphs";
import ResultsValue from "./ResultsValue";
import TestCategoryName from "./TestCategoryName";
import UnitsName from "./UnitsName";

const LabResultsTable = ({ labResultsData }) => {
  return (
    <div className="overflow-auto rounded-md shadow mb-5">
      <table className="w-full">
        <thead className="bg-secondary-100 border-b-2 border-gray-200">
          <tr>
            <th className="p-2 text-sm text-center tracking-wide text-white">
              Test
            </th>
            <th className="p-2 text-sm text-center tracking-wide text-white">
              Result
            </th>
            <th className="p-2 text-sm text-center tracking-wide text-white">
              Range
            </th>
          </tr>
        </thead>
        {labResultsData.map((l, index) => (
          <tbody key={index} className="divide-y divide-secondary-10">
            <TestCategoryName category={l} />
            {l.test.map((t) => (
              <tr key={t.id}>
                <UnitsName name={t.name} units={t.units} />
                <ResultsValue result={t.result} min={t.min} max={t.max} />
                <InputGraphs result={t.result} min={t.min} max={t.max} />
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default LabResultsTable;
