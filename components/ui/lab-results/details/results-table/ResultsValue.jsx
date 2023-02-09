const ResultsValue = ({ result, min, max }) => {
  return (
    <td className="p-3.5 text-sm text-center">
      {result < min || result > max ? (
        <span className="text-red-500">{result}</span>
      ) : (
        <>{result}</>
      )}
    </td>
  );
};

export default ResultsValue;
