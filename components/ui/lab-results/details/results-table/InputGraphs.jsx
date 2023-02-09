const InputGraphs = ({ result, min, max }) => {
  const getInputWidth = (result, min, max) => {
    if (result < min) {
      const firstInputWidth = `${((min - result) / min) * 100}%`;
      const secondInputWidth = `${100 - ((min - result) / min) * 100}%`;
      return {
        firstInputWidth,
        secondInputWidth,
      };
    } else if (result > max) {
      const firstInputWidth = `${100 - ((result - max) / result) * 100}%`;
      const secondInputWidth = `${((result - max) / result) * 100}%`;
      return {
        firstInputWidth,
        secondInputWidth,
      };
    } else {
      return {
        firstInputWidth: 50,
        secondInputWidth: 50,
      };
    }
  };

  const getLabelPosition = (position) => {
    return `calc(${parseInt(position)}% - 8px)`;
  };

  return (
    <td className="p-3">
      <div className="flex w-40 relative">
        {result < min && (
          <input
            type="range"
            value={result}
            onChange={() => {}}
            style={{ width: getInputWidth(result, min, max).firstInputWidth }}
            className={
              "appearance-none border-2 border-slate-200 border-r-0 slider-danger"
            }
          />
        )}
        <p
          style={{
            left:
              result < min
                ? getLabelPosition(
                    getInputWidth(result, min, max).firstInputWidth
                  )
                : result > max
                ? "-8px"
                : "9.5px",
          }}
          className={"absolute -top-4 text-xs"}
        >
          {min}
        </p>
        <p
          style={{
            right:
              result < min
                ? "-8px"
                : result > max
                ? getLabelPosition(
                    getInputWidth(result, min, max).secondInputWidth
                  )
                : "9.5px",
          }}
          className={`absolute -top-4 text-xs ${
            result >= min && result <= max ? "right-0" : ""
          } `}
        >
          {max}
        </p>
        {result >= min && result <= max ? (
          <div className="w-5 border-2 border-slate-200 border-r-0"></div>
        ) : (
          <></>
        )}
        <input
          type="range"
          value={result}
          onChange={() => {}}
          min={result >= min && result <= max ? min : null}
          max={result >= min && result <= max ? max : null}
          style={{
            width:
              result < min
                ? getInputWidth(result, min, max).secondInputWidth
                : result > max
                ? getInputWidth(result, min, max).firstInputWidth
                : "100%",
          }}
          className={`appearance-none border-2 border-slate-200 bg-slate-300 min-w-[10%]
                           ${
                             result < min || result > max
                               ? "slider-none"
                               : "slider"
                           }`}
        />
        {result >= min && result <= max ? (
          <div className="w-5 border-2 border-slate-200 border-l-0"></div>
        ) : (
          <></>
        )}
        {result > max && (
          <input
            type="range"
            value={result}
            onChange={() => {}}
            style={{
              width: getInputWidth(result, min, max).secondInputWidth,
            }}
            className={
              "appearance-none border-2 border-slate-200 border-l-0 slider-danger"
            }
          />
        )}
      </div>
    </td>
  );
};

export default InputGraphs;
