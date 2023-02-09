import { Card } from "../core/Card";
import { Button } from "../core/Buttons";
import { MediumText, SmallText } from "../core/Text";
import {
  getWeekday,
  getDate,
  getMonth,
  getFullYear,
} from "../../../utils/date/DateFunctions";

const PackageBookingCard = ({ order }) => {
  return (
    <div className="flex w-full mb-1">
      <Card classes="bg-white" dropShadow={true} hoverEffect={true}>
        <div className="flex flex-row items-center justify-center bg-slate-100 rounded-t-md">
          <img
            src={
              order?.package?.type === "package"
                ? order?.package?.imageURL
                : "../icons/doctor.png"
            }
            alt={order?.package?.name}
            width={64}
            height={64}
            className="object-cover w-24 rounded-l-md"
          />
          <div className="flex flex-col w-4/5 items-start pt-2 px-3">
            <MediumText classes="text-lg font-bold font-title text-primary-100">
              {order?.package?.name}
            </MediumText>
            <SmallText classes="text-sm font-general text-slate-600">
              {order?.package?.description}
            </SmallText>
            <div className="flex flex-row w-full justify-end items-center">
              {order?.package?.type === "package" ? (
                <MediumText classes="mt-1 font-general font-semibold text-slate-700">
                  S${order?.package.price?.amount}
                </MediumText>
              ) : (
                <MediumText classes="mt-1 font-general font-semibold text-slate-700">
                  S${order?.basket?.[0]?.price?.amount}
                </MediumText>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full items-center justify-between pt-2 px-3">
          <div className="flex justify-center items-center py-1 mb-1">
            <SmallText classes="text-sm font-general text-primary-100">
              Date Placed:
            </SmallText>
            <SmallText classes="text-sm font-title text-slate-700 ml-1">
              <span>
                {getWeekday(order?.placedWhenUTC)?.substring(0, 3) + " - "}
              </span>
              <span>
                {getMonth(order?.placedWhenUTC)?.substring(0, 3) + " "}
              </span>
              <span>{getDate(order?.placedWhenUTC) + ", "}</span>
              <span>{getFullYear(order?.placedWhenUTC)}</span>
            </SmallText>
          </div>
        </div>
        <div className="flex items-center w-full px-2">
          <div className="w-full">
            <Button
              classes="font-general"
              primary={order?.package?.type === "package" ? true : false}
              full={true}
              handleClick={() => {}}
              href={`/order/${order.id}`}
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PackageBookingCard;
