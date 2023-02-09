import { useCallback } from "react";
import { getWeekday } from "../../utils/date/DateFunctions";
export const useQuickDateslots = () => {
  const getQuickDateSlots = useCallback((doctor, locationKey = null) => {
    // locationKey will be null for online
    if (locationKey != null) {
      let tempArray = [];
      let closed;
      let offset = 0;
      while (tempArray.length < 3) {
        // Get a new date
        let date = new Date();
        date.setDate(date.getDate() + offset);
        date.setHours(0, 0, 0, 0);
        closed = false;
        const locationSchedule = doctor.workSchedule.offline.find((item) => {
          return item.branchid == locationKey;
        });
        if (locationSchedule) {
          for (let r in locationSchedule.regularHours) {
            if (getWeekday(date) == locationSchedule.regularHours[r].day) {
              if (!locationSchedule.regularHours[r].isOpen) {
                closed = true;
              }
            }
          }

          // Check if date is marked as closed in special hours
          for (let s in locationSchedule.specialHours) {
            let specDate = new Date(locationSchedule.specialHours[s].day);
            specDate.setHours(0, 0, 0, 0);
            if (
              date.getTime() === specDate.getTime() &&
              !locationSchedule.specialHours[s].isOpen
            ) {
              closed = true;
            }
          }
        }
        // Push date to quick slots if not closed, skip if it is closed
        if (!closed) {
          tempArray.push(date);
        }
        offset += 1;
      }
      return tempArray;
    } else {
      let tempArray = [];
      let closed;
      let offset = 0;
      while (tempArray.length < 3) {
        // Get a new date
        let date = new Date();
        date.setDate(date.getDate() + offset);
        date.setHours(0, 0, 0, 0);
        closed = false;
        const onlineSchedule = doctor.workSchedule.online[0];
        if (onlineSchedule) {
          for (let r in onlineSchedule.regularHours) {
            if (getWeekday(date) == onlineSchedule.regularHours[r].day) {
              if (!onlineSchedule.regularHours[r].isOpen) {
                closed = true;
              }
            }
          }
        }
        // Push date to quick slots if not closed, skip if it is closed
        if (!closed) {
          tempArray.push(date);
        }
        offset += 1;
      }
      return tempArray;
    }
  }, []);

  return getQuickDateSlots;
};
