import { useRouter } from "next/router";
import { Card } from "../core/Card";
import { RegularText, MediumText, FadedSmallText } from "../core/Text";
import { Button } from "../core/Buttons";
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoLocationOutline,
  IoArrowForward,
  IoArrowDown,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import {
  getWeekday,
  getDate,
  getMonth,
  getFullYear,
  getTime,
} from "../../../utils/date/DateFunctions";

const LabResultCardItem = ({ result }) => {
  return (
    <Card classes="px-2 pt-3 my-4 bg-white">
      <div className="flex w-full mb-4">
        <div className="mr-3 flex justify-center items-start flex-none">
          <img
            src={`/icons/${
              result.type === "lab-test"
                ? "lab"
                : result.type === "radiology"
                ? "record"
                : result.type === "personal"
                ? "medical-ledger"
                : result.type === "immunization"
                ? "syringe"
                : "shield-plus"
            }.png`}
            alt={result.type}
            width="50"
            height="50"
            className="object-cover w-20 h-20"
          />
        </div>
        <div className="flex flex-col w-full justify-evenly space-y-3">
          <RegularText classes="font-title">
            {!result.userUploaded ? result.testName : "Uploaded File"}
          </RegularText>
          <div className="flex w-full justify-between pr-4">
            <div className="flex items-center justify-between">
              <IoCalendarOutline className="w-5 h-5 text-primary-100 mr-2" />
              <FadedSmallText>
                <span>
                  {getWeekday(result.dateTimeUTC)?.substring(0, 3) + " - "}
                </span>
                <span>
                  {getMonth(result.dateTimeUTC)?.substring(0, 3) + " "}
                </span>
                <span>{getDate(result.dateTimeUTC) + ", "}</span>
                <span>{getFullYear(result.dateTimeUTC)}</span>
              </FadedSmallText>
            </div>
            <div className="flex items-center">
              <IoTimeOutline className="w-5 h-5 text-primary-100 ml-4 mr-2" />
              <FadedSmallText>{getTime(result.dateTimeUTC)}</FadedSmallText>
            </div>
          </div>
        </div>
      </div>
      {!result.userUploaded ? (
        <Button
          handleClick={() => {}}
          full
          primary
          classes={"rounded-lg"}
          href={`/${
            result.type === "lab-test" ? "lab-results" : "radiology"
          }/details/${result?.id}`}
        >
          <div className="flex justify-center space-x-2">
            <MediumText classes="font-title">View Result</MediumText>
            <IoArrowForward size="1.2em" className="self-center" />
          </div>
        </Button>
      ) : (
        <Button
          handleClick={() => {
            console.log("Downloading file ...");
          }}
          full
          classes={"rounded-lg"}
          href={"#"}
        >
          <div className="flex justify-center space-x-2">
            <MediumText classes="font-title">Download Report</MediumText>
            <IoArrowDown size="1.2em" className="self-center" />
          </div>
        </Button>
      )}
    </Card>
  );
};

export default LabResultCardItem;
