import { useHistory } from "react-router-dom";
import { Button, OutlinedButton } from "../../core/Buttons";
import { SubHeadingText, HeadingText } from "../../core/Text";

const RejoinMeetingComponent = ({ rejoinOnClick, status, activeCall }) => {
  const history = useHistory();
  const endCallOnClick = () => {
    history.push("/ended-call");
  };
  return (
    <div className="">
      <HeadingText classes="text-center mb-4">You left the meeting</HeadingText>
      <div className="flex space-x-3 justify-between">
        <OutlinedButton handleClick={() => rejoinOnClick(!status)} full>
          Rejoin
        </OutlinedButton>
        <Button handleClick={endCallOnClick} primary full>
          End Call
        </Button>
      </div>
    </div>
  );
};

export default RejoinMeetingComponent;
