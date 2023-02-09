import { useEffect } from "react";
import { BsDot, BsMic, BsMicMute } from "react-icons/bs";
import { IoVideocamOutline, IoVideocamOffOutline } from "react-icons/io5";
import { Button } from "../../../ui/core/Buttons";
import {
  SubHeadingText,
  FadedMediumText,
  MediumText,
} from "../../../ui/core/Text";

const VideoCallPreview = ({
  cameraActive,
  micActive,
  playVideoFromCamera,
  joinMeetingOnClick,
  toggleAudioButton,
  toggleVideoButton,
}) => {
  useEffect(() => {
    playVideoFromCamera();
  }, []);

  return (
    <>
      <SubHeadingText classes="text-center">
        Video Consultation: General Physician
      </SubHeadingText>
      <div className="flex justify-center items-center mb-3">
        <FadedMediumText>Wed, 6 Jul</FadedMediumText>
        <BsDot />
        <FadedMediumText>2:00 - 2:30 pm</FadedMediumText>
      </div>
      <div className="bg-slate-900 rounded-lg w-full max-h-max">
        <video
          id="localVideo"
          autoPlay
          playsInline
          controls={false}
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-center mt-3 space-x-4">
        {cameraActive ? (
          <div
            className="inline-block bg-slate-300 rounded-full p-3"
            onClick={() => toggleVideoButton()}
          >
            <IoVideocamOutline size={27} />
          </div>
        ) : (
          <div
            className="inline-block bg-red-500 rounded-full p-3"
            onClick={() => toggleVideoButton()}
          >
            <IoVideocamOffOutline size={27} color="white" />
          </div>
        )}
        {micActive ? (
          <div
            className="inline-block bg-slate-300 rounded-full p-3"
            onClick={() => toggleAudioButton()}
          >
            <BsMic size={27} />
          </div>
        ) : (
          <div
            className="inline-block bg-red-500 rounded-full p-3"
            onClick={() => toggleAudioButton()}
          >
            <BsMicMute size={27} color="white" />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center mt-4">
        <SubHeadingText>Ready to join the call?</SubHeadingText>
        <MediumText>Dr. John Doe, Venkatesh Chakrabarty</MediumText>
        <FadedMediumText>Online Consultation</FadedMediumText>
        <Button handleClick={() => joinMeetingOnClick()}>Join Now</Button>
      </div>
    </>
  );
};

export default VideoCallPreview;
