import { Button } from "../core/Buttons";
import { MediumText } from "../core/Text";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

interface ProfileProgressProps {
  percentage: number;
}

const ProfileProgress = ({ percentage }: ProfileProgressProps) => {
  return (
    <div className="border border-gray-300 p-1 rounded-2xl mx-4 shadow-md">
      <div className=" p-1  my-2 ">
        <div className="flex flex-row w-full items-center  pt-2 px-3">
          <div className="flex justify-center items-center py-1 mb-1">
            <div className="w-12">
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "#f58232",
                  textColor: "#f58232",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                  textSize: "28px",
                })}
                value={percentage}
                text={`${percentage}%`}
              />
            </div>
          </div>
          <div className="flex justify-center items-center py-1 mb-1 ml-3">
            <MediumText classes="text-lg font-bold font-title text-primary-100">
              Your Profile Progress
            </MediumText>
          </div>
        </div>
        <div className="flex items-center w-full px-2">
          <div className="w-full">
            <Link to="/user-profile">
              <Button
                classes="font-general"
                primary={true}
                full={true}
                handleClick={() => {}}
              >
                Complete your Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileProgress;
