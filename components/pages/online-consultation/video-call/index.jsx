import { useEffect, useState } from "react";
import { BsMic, BsMicMute, BsTelephoneX } from "react-icons/bs";
import {
  IoVideocamOffOutline,
  IoVideocamOutline,
  IoChatboxOutline,
  IoSendSharp,
} from "react-icons/io5";
import { RegularText } from "../../../ui/core/Text";
import { Link } from "react-router-dom";

const VideoCall = ({
  cameraActive,
  micActive,
  playVideoFromCamera,
  stopStreamedVideo,
  toggleAudioButton,
  toggleVideoButton,
}) => {
  const [toggleChat, setToggleChat] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage({ value: event.target.value });
  };

  useEffect(() => {
    playVideoFromCamera();
  }, []);

  return (
    <>
      <div className="rounded-xl w-full max-h-max p-2 relative">
        <div>
          <video
            id="localVideo"
            autoPlay
            playsInline
            controls={false}
            className="rounded-xl"
          />
        </div>
        {toggleChat && (
          <div className="top-0 left-0 bg-blue-500 rounded-xl absolute h-full w-full">
            <div className="p-2 flex justify-between">
              <RegularText classes="text-white">In-call messages</RegularText>
            </div>
            <div className="bg-white h-4/6 p-2">Test message</div>
            <div className="p-2 bg-zinc-50 rounded-b-xl relative">
              <input
                type="text"
                placeholder="Message..."
                className="rounded-lg p-2 w-full"
                onChange={handleChange}
              />
              <IoSendSharp
                color="#3b82f6"
                className="right-4 top-5 absolute"
                size={18}
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-evenly w-full mt-10">
        {cameraActive ? (
          <div
            className="inline-block bg-slate-100 rounded-full p-3"
            onClick={toggleVideoButton}
          >
            <IoVideocamOutline size={27} />
          </div>
        ) : (
          <div
            className="inline-block bg-red-500 rounded-full p-3"
            onClick={toggleVideoButton}
          >
            <IoVideocamOffOutline size={27} color="white" />
          </div>
        )}
        {micActive ? (
          <div
            className="inline-block bg-slate-100 rounded-full p-3"
            onClick={toggleAudioButton}
          >
            <BsMic size={27} />
          </div>
        ) : (
          <div
            className="inline-block bg-red-500 rounded-full p-3"
            onClick={toggleAudioButton}
          >
            <BsMicMute size={27} color="white" />
          </div>
        )}
        {/* <div
            className="inline-block bg-slate-100 rounded-full p-3"
            onClick={flipCamera}
          >
            <IoCameraReverseOutline size={27} />
          </div> */}
        {toggleChat ? (
          <div
            className="inline-block bg-blue-500 rounded-full p-3"
            onClick={() => setToggleChat(!toggleChat)}
          >
            <IoChatboxOutline size={27} color="white" />
          </div>
        ) : (
          <div
            className="inline-block bg-slate-100 rounded-full p-3"
            onClick={() => setToggleChat(!toggleChat)}
          >
            <IoChatboxOutline size={27} color="black" />
          </div>
        )}
        <div
          className="inline-block bg-red-500 rounded-full p-3 right-0"
          onClick={() => stopStreamedVideo()}
        >
          <Link to="/ended-call">
            <BsTelephoneX size={27} color="white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default VideoCall;
