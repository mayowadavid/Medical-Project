import { useCallback } from "react";

export const useDisabledDates = () => {
  const getDisabledDates = useCallback((specialDates) => {
    // Used to remove dates that are set as not open in special hours for the datepicker
    let tempArray = [];
    if (specialDates) {
      for (let d in specialDates) {
        if (!specialDates[d].isOpen) {
          tempArray.push(new Date(specialDates[d].day));
        }
      }
    }
    return tempArray;
  }, []);
  return getDisabledDates;
};
