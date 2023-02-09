import { useCallback, useEffect, useState } from "react";
import { BsDot, BsMic, BsMicMute } from "react-icons/bs";
import { IoVideocamOutline, IoVideocamOffOutline } from "react-icons/io5";
import { Button } from "../../core/Buttons";
import { SubHeadingText, FadedMediumText, MediumText } from "../../core/Text";

let localStream;
let videoElement;

const VideoCallPreview = ({
  constraints,
  status,
  changeStatus,
  micActive,
  setMicActive,
  cameraActive,
  setCameraActive,
}) => {
  const initWebRTC = () => {
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

  const toggleAudioButton = useCallback(() => {
    try {
      const audioTrack = localStream
        ?.getTracks()
        ?.find((track) => track.kind === "audio");
      if (audioTrack.enabled) {
        audioTrack.enabled = false;
        setMicActive(false);
      } else {
        audioTrack.enabled = true;
        setMicActive(true);
      }
    } catch (error) {
      console.error("Error muting microphone", error);
    }
  }, [localStream]);

  const toggleVideoButton = useCallback(async () => {
    try {
      const videoTrack = localStream
        ?.getTracks()
        ?.find((track) => track.kind === "video");
      if (videoTrack?.enabled) {
        videoTrack.enabled = false;
        videoTrack.stop();
        setCameraActive(false);
      } else {
        const audioTrack = localStream
          ?.getTracks()
          ?.find((track) => track.kind === "audio");
        if (audioTrack?.enabled) {
          initWebRTC();
        } else {
          initWebRTCMuteAudio();
        }
        setCameraActive(true);
      }
    } catch (error) {
      console.error("Error closing video camera", error);
    }
  }, [localStream]);

  const joinMeetingOnClick = () => {
    localStream.getTracks().forEach((track) => track.stop());
    videoElement.srcObject.getTracks().forEach((video) => video.stop());
    localStream = null;
    videoElement = null;
    changeStatus(!status);
  };

  useEffect(() => {
    initWebRTC();
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
          autoPlay
          playsInline
          controls={false}
          className="video-call rounded-lg"
        />
      </div>
      <div className="flex justify-center mt-3 space-x-4">
        {cameraActive ? (
          <div
            className="inline-block bg-slate-300 rounded-full p-3"
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
            className="inline-block bg-slate-300 rounded-full p-3"
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
      </div>
      <div className="flex flex-col items-center mt-4">
        <SubHeadingText>Ready to join the call?</SubHeadingText>
        <MediumText>Dr. John Doe, Venkatesh Chakrabarty</MediumText>
        <FadedMediumText>Online Consultation</FadedMediumText>
        <Button handleClick={joinMeetingOnClick}>Join Now</Button>
      </div>
    </>
  );
};

export default VideoCallPreview;
