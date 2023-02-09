import { useEffect, useRef, useState, useCallback } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { TopHeader } from "../../../ui/layouts/Headers";

const CONSTRAINTS = { audio: true, video: { width: 1920, height: 1080 } };

// * This method doesn't work with iOS and Android. But I just leave this file

const WebRTC = () => {
  const [isCallActive, setIsCallActive] = useState(true);
  const [streamObj, setStreamObj] = useState();
  const [cameraActive, setCameraActive] = useState(true);
  const [audioActive, setAudioActive] = useState(true);

  const videoRef = useRef();
  const videoRef1 = useRef();

  const webRTC = () => {
    navigator.mediaDevices
      .getUserMedia(CONSTRAINTS)
      .then((stream) => {
        console.log("Got MediaStream: ", stream);
      })
      .catch((error) => {
        console.error("Error accessing media devices.", error);
      });
  };

  const playVideoFromCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
      userStream = stream;
      const videoElement = document.querySelector("video#localVideo");
      videoElement.srcObject = stream;
    } catch (error) {
      console.error("Error opening video camera", error);
    }
  };

  const initWebRTC = useCallback(() => {
    navigator.mediaDevices
      .getUserMedia(CONSTRAINTS)
      .then(function (mediaStream) {
        setStreamObj(mediaStream);
        var video = videoRef.current;
        var video1 = videoRef1.current;
        video.srcObject = mediaStream;
        video1.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
        video1.onloadedmetadata = function (e) {
          video1.play();
        };
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      });
  }, []);

  const toggleVideo = (value) => {
    streamObj.getVideoTracks()[0].enabled = value;
    setCameraActive(value);
  };

  const toggleAudio = (value) => {
    streamObj.getAudioTracks()[0].enabled = value;
    setAudioActive(value);
  };

  const disconnectCall = () => {
    const video = videoRef.current;
    const video1 = videoRef1.current;

    for (const track of video.srcObject.getTracks()) {
      track.stop();
    }
    for (const track of video1.srcObject.getTracks()) {
      track.stop();
    }
    video.srcObject = null;
    video1.srcObject = null;
    console.log("sucesss webcam closed");
    setIsCallActive(false);
  };

  useEffect(() => {
    webRTC();
    playVideoFromCamera();
  }, []);

  return (
    <IonPage>
      <TopHeader pageName="Online Call" />
      <IonContent className="ion-padding">
        <div className="bg-slate-900 rounded-lg w-full h-auto">
          {/* <video
            style={{
              width: "100%",
              height: "auto",
            }}
            src=""
            ref={videoRef}
            className="rounded-lg"
          ></video> */}
          <video
            id="localVideo"
            autoPlay
            playsInline
            controls={false}
            className="rounded-lg"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WebRTC;
