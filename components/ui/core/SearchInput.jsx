import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import isNil from "lodash/isNil";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";

import Input from "../controls/form/input";

import { filterObjectInArrayByRegex } from "../../lib/utils/array";

/*
  Note:
    - this component will be used when graphql call is required during onChange (typing)
    - suggestionOnly means that the value of input can ultimately be chosen from suggestions
    - onChange consists of 2 params to cater for more scenarios (clear input value after clicking suggestion etc.)
    - suggestionOnSearch refers to graphql call (we need to add debouncing hook for this component)
    - we can pass ICON_TYPE.xxx as prefixIcon if required
*/
const SearchInput = forwardRef(
  (
    {
      className,
      prefixIcon,
      value,
      placeholder,
      suggestionOnly,
      isError,
      onChange,
      suggestionOnSearch,
    },
    ref
  ) => {
    const mounted = useRef(false);
    const fetchingValue = useRef(null); // TODO: see if we can remove it and use abort controller to control fetching state

    const [suggestions, setSuggestions] = useState([]);
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const filteredSuggestions = useMemo(() => {
      return filterObjectInArrayByRegex(suggestions, "name", value);
    }, [value, suggestions]);

    const fetchSuggestions = useCallback(
      async (query, callback) => {
        try {
          fetchingValue.current = query;
          const res = await suggestionOnSearch(query);
          callback(res);
        } catch (e) {
          callback([]);
        }
      },
      [suggestionOnSearch]
    );

    const onBlur = useCallback(() => {
      if (isOnFocus) {
        setTimeout(() => {
          suggestionOnly && onChange("", "onBlur");
          mounted.current && setIsOnFocus(false); // require time-out to make suggestion-on-click works
        }, 100);
      }
    }, [isOnFocus, suggestionOnly, onChange]);

    const _onChange = useCallback(
      (e) => {
        onChange(e.target.value, "type");
      },
      [onChange]
    );

    const onFocus = useCallback(() => {
      setIsOnFocus(true);
    }, []);

    const suggestionOnClick = useCallback(
      (suggestion) => {
        onChange(
          suggestionOnly ? suggestion : suggestion.name,
          "suggestionClick"
        );
        setIsOnFocus(false);
      },
      [onChange, suggestionOnly]
    );

    const debouncedFetchSuggestions = useMemo(() => {
      return debounce((query, cb) => fetchSuggestions(query, cb), 500);
    }, [fetchSuggestions]);

    useEffect(() => {
      mounted.current = true;

      return () => {
        mounted.current = false;
        fetchingValue.current = null;
        setSuggestions([]);
        setIsFetching(false);
      };
    }, []);

    useEffect(() => {
      // TODO: pass abort controller signal into function (deep to graphql call)
      if (isOnFocus) {
        setIsFetching(true);
        debouncedFetchSuggestions(value, (res) => {
          setSuggestions(
            res.length
              ? filterObjectInArrayByRegex(res, "name", fetchingValue.current)
              : res
          );

          if (fetchingValue.current === value) {
            setIsFetching(false);
          }
        });
      }
    }, [value, isOnFocus, debouncedFetchSuggestions]);

    return (
      <div
        className={`
        border-radius--5
        relative
        flex--1
        self-center
        py-1
        px-2
        bg-white
        ${!isError ? "border--1-solid-grey-light" : "border--1-solid-danger"}
        ${className}
      `}
      >
        <Input
          ref={ref}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoComplete="off"
        />
        {isOnFocus && value?.length > 0 && (
          <>
            {filteredSuggestions?.length > 0 ? (
              <div className="absolute left-0 w-full max-h-[160px] overflow-y-scroll border border-solid border-t-0 bg-white z-[5] t-[calc(2rem + 3px)]">
                {filteredSuggestions.map((s, idx) => (
                  <div
                    key={isNil(s.id) ? `suggestion--${idx}` : `${s.id}`}
                    className="p-[5px 10px] hover:bg-amber-600"
                    onClick={() => {
                      suggestionOnClick(s);
                    }}
                  >
                    {s.name}
                  </div>
                ))}
              </div>
            ) : (
              <>
                {suggestionOnly && !isFetching && (
                  <div className="absolute left-0 w-full max-h-[160px] overflow-y-scroll border border-solid border-t-0 bg-white z-[5] t-[calc(2rem + 3px)]">
                    <div className="m-[0.8rem auto]">
                      <p fontColor="grey">No results</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    );
  }
);

SearchInput.propTypes = {
  className: PropTypes.string,
  //prefixIcon: PropTypes.oneOf(ICON_TYPE_PROPS.concat('')),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  suggestionOnly: PropTypes.bool,
  isError: PropTypes.bool,
  onChange: PropTypes.func,
  suggestionOnSearch: PropTypes.func,
};

SearchInput.defaultProps = {
  className: "",
  //prefixIcon: '',
  value: "",
  placeholder: "Search",
  suggestionOnly: false,
  isError: false,
  onChange: () => {},
  suggestionOnSearch: () => {},
};

SearchInput.displayName = "SearchInput";

export default SearchInput;
