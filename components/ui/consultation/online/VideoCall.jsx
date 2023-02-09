import { useEffect, useState, useCallback } from "react";
import { BsMic, BsMicMute, BsTelephoneX } from "react-icons/bs";
import {
  IoVideocamOffOutline,
  IoVideocamOutline,
  IoChatboxOutline,
  IoSendSharp,
} from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { RegularText } from "../../core/Text";

let localStream;
let videoElement;

const VideoCall = ({
  constraints,
  status,
  changeStatus,
  activeCall,
  changeActiveCall,
  micActive,
  setMicActive,
  cameraActive,
  setCameraActive,
  CONSTRAINTS_ONLY_VIDEO,
  CONSTRAINTS_ONLY_AUDIO,
}) => {
  const history = useHistory();
  const [toggleChat, setToggleChat] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const initWebRTC = (constraints) => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        localStream = stream;
        videoElement = document.querySelector(".video-call");
        videoElement.srcObject = stream;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const initWebRTCMuteAudio = () => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        localStream = stream;
        const audioTrack = localStream
          .getTracks()
          .find((track) => track.kind === "audio");
        audioTrack.enabled = false;
        videoElement = document.querySelector(".video-call");
        videoElement.srcObject = stream;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleAudio = useCallback(() => {
    try {
      const audioTrack = localStream
        ?.getTracks()
        ?.find((track) => track.kind === "audio");
      if (audioTrack?.enabled) {
        console.log("audio on to off");
        audioTrack.enabled = false;
        setMicActive(false);
      } else {
        console.log("audio off to on");
        if (!audioTrack) {
          if (cameraActive) {
            initWebRTC(constraints);
          } else {
            initWebRTC(CONSTRAINTS_ONLY_AUDIO);
          }
        } else audioTrack.enabled = true;
        setMicActive(true);
      }
    } catch (error) {
      console.error("Error muting microphone", error);
    }
  }, [localStream]);

  const toggleVideo = useCallback(async () => {
    try {
      const videoTrack = localStream
        ?.getTracks()
        ?.find((track) => track.kind === "video");
      if (videoTrack?.enabled) {
        // video on to off
        console.log("video on to off");
        videoTrack.enabled = false;
        videoTrack.stop();
        setCameraActive(false);
      } else {
        // video off to on
        console.log("video off to on");
        const audioTrack = localStream
          ?.getTracks()
          ?.find((track) => track.kind === "audio");
        if (audioTrack?.enabled) {
          initWebRTC(constraints);
        } else {
          initWebRTCMuteAudio();
        }
        setCameraActive(true);
      }
    } catch (error) {
      console.error("Error closing video camera", error);
    }
  }, [localStream]);

  const stopStreamedVideo = () => {
    localStream.getTracks().forEach((track) => track.stop());
    videoElement.srcObject.getTracks().forEach((video) => video.stop());
    localStream = null;
    videoElement = null;
    changeStatus(!status);
    changeActiveCall(!activeCall);
  };

  useEffect(() => {
    console.log("mic", micActive);
    console.log("camera", cameraActive);
    if (micActive && cameraActive) {
      initWebRTC(constraints);
    } else if (micActive) {
      initWebRTC(CONSTRAINTS_ONLY_AUDIO);
    } else if (cameraActive) {
      initWebRTC(CONSTRAINTS_ONLY_VIDEO);
    }
  }, []);

  return (
    <>
      <div className="rounded-xl w-full max-h-max p-2 relative">
        <div>
          <video
            autoPlay
            playsInline
            controls={false}
            className="video-call rounded-xl"
          />
        </div>
        {toggleChat && (
          <div className="top-0 left-0 bg-blue-500 rounded-xl absolute h-full w-full">
            <div className="p-2 flex justify-between">
              <RegularText classes="text-white">In-call messages</RegularText>
            </div>
            <div className="bg-white h-4/6 p-2">{message}</div>
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
            onClick={toggleVideo}
          >
            <IoVideocamOutline size={27} />
          </div>
        ) : (
          <div
            className="inline-block bg-red-500 rounded-full p-3"
            onClick={toggleVideo}
          >
            <IoVideocamOffOutline size={27} color="white" />
          </div>
        )}
        {micActive ? (
          <div
            className="inline-block bg-slate-100 rounded-full p-3"
            onClick={toggleAudio}
          >
            <BsMic size={27} />
          </div>
        ) : (
          <div
            className="inline-block bg-red-500 rounded-full p-3"
            onClick={toggleAudio}
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
          <BsTelephoneX size={27} color="white" />
        </div>
      </div>
    </>
  );
};

export default VideoCall;
