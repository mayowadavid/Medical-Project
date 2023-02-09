import { SubHeadingText } from "../../core/Text";

const ConsultationStatus = ({ isCanceled, isCompleted }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-center">
      {isCanceled ? (
        <div className="flex flex-col justify-center items-center my-2 mx-center">
          <SubHeadingText classes="font-semibold my-4 text-tertiary-100">
            Online Consultation Cancelled
          </SubHeadingText>
          <img
            src="/assets/images/appointment/cancelled-animate.svg"
            alt="success"
            className="w-60 h-60"
          />
        </div>
      ) : isCompleted ? (
        <div className="flex flex-col justify-center items-center my-2 mx-center">
          <SubHeadingText classes="font-semibold my-4 text-tertiary-100">
            Online Consultation Completed
          </SubHeadingText>
          <img
            src="/assets/images/appointment/completed-animate.svg"
            alt="success"
            className="w-60 h-60"
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-2 mx-center">
          <SubHeadingText classes="font-semibold my-4 text-tertiary-100">
            Online Consultation Confirmed
          </SubHeadingText>
          <img
            src="/assets/images/appointment/confirmed-animate.svg"
            alt="success"
            className="w-60 h-60"
          />
        </div>
      )}
    </div>
  );
};

export default ConsultationStatus;
