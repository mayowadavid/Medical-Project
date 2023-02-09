import { useCallback } from "react";

export const useTimeslots = () => {
  const getTimeslots = useCallback((doctor, date, locationKey = null) => {
    // locationKey will be null for online

    function slotToMs(time) {
      // time is something like 09:00, 18:00
      let baseDate = new Date().toDateString();
      baseDate = baseDate + " " + time + ":00";
      return Date.parse(baseDate);
    }

    // Return the timeslots of a given date
    if (locationKey != null) {
      let tempSlots = {
        morning: [],
        afternoon: [],
        evening: [],
      };
      date = new Date(date);
      date.setHours(0, 0, 0, 0);
      const currBranchSchedule = doctor.workSchedule.offline.find(
        (doc) => doc.branchid == locationKey
      );
      let hours = currBranchSchedule.regularHours[date.getDay()].hours;
      let specialDate;
      // How long each slot is > 1000ms x 60s x 60m makes 1 hour
      let slotCrawler = 1000 * 60 * 60;
      let noon = 1000 * 60 * 60 * 12;
      let afternoon = 1000 * 60 * 60 * 16;
      let dayBase = slotToMs("00:00");
      let startTime;
      let endTime;
      // If there are special hours assigned for that day, apply those hours
      for (let s in currBranchSchedule.specialHours) {
        specialDate = new Date(currBranchSchedule.specialHours[s].day);
        specialDate.setHours(0, 0, 0, 0);
        if (date.getTime() === specialDate.getTime()) {
          hours = currBranchSchedule.specialHours[s].hours;
          break;
        }
      }
      // Breakdown the hours into timeslots
      for (let times in hours) {
        startTime = slotToMs(hours[times].open);
        endTime = slotToMs(hours[times].close);
        while (endTime - startTime >= slotCrawler) {
          if (startTime - dayBase < noon) {
            tempSlots.morning.push(
              new Date(startTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          } else if (startTime - dayBase < afternoon) {
            tempSlots.afternoon.push(
              new Date(startTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          } else {
            tempSlots.evening.push(
              new Date(startTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          }
          startTime += slotCrawler;
        }
      }
      return tempSlots;
    } else {
      let tempSlots = {
        morning: [],
        afternoon: [],
        evening: [],
      };
      date = new Date(date);
      date.setHours(0, 0, 0, 0);
      const onlineSchedule = doctor.workSchedule.online[0];
      let hours = onlineSchedule.regularHours[date.getDay()].hours;
      // How long each slot is > 1000ms x 60s x 60m makes 1 hour
      let slotCrawler = 1000 * 60 * 60;
      let noon = 1000 * 60 * 60 * 12;
      let afternoon = 1000 * 60 * 60 * 16;
      let dayBase = slotToMs("00:00");
      let startTime;
      let endTime;
      // Breakdown the hours into timeslots
      for (let times in hours) {
        startTime = slotToMs(hours[times].open);
        endTime = slotToMs(hours[times].close);
        while (endTime - startTime >= slotCrawler) {
          if (startTime - dayBase < noon) {
            tempSlots.morning.push(
              new Date(startTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          } else if (startTime - dayBase < afternoon) {
            tempSlots.afternoon.push(
              new Date(startTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          } else {
            tempSlots.evening.push(
              new Date(startTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          }
          startTime += slotCrawler;
        }
      }
      return tempSlots;
    }
  }, []);

  return getTimeslots;
};
