import { IonPage, IonContent } from "@ionic/react";
import { useEffect, useState } from "react";
import { TopHeader } from "../../../ui/layouts/Headers";
import VideoCall from "../../../ui/consultation/online/VideoCall";
import VideoCallPreview from "../../../ui/consultation/online/VideoCallPreview";
import RejoinMeetingComponent from "../../../ui/consultation/online/RejoinMeetingComponent";
import { useLocation } from "react-router-dom";

const CONSTRAINTS = {
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
    facingMode: "user",
  },
  audio: { echoCancellation: true },
};
const CONSTRAINTS_ONLY_AUDIO = {
  video: false,
  audio: { echoCancellation: true },
};
const CONSTRAINTS_ONLY_VIDEO = {
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
    facingMode: "user",
  },
  audio: false,
};

const LandingPageVideoCall = () => {
  const location = useLocation();
  const [readyToJoin, setReadyToJoin] = useState(false);
  const [activeCall, setActiveCall] = useState(true);
  const [micActive, setMicActive] = useState(true);
  const [cameraActive, setCameraActive] = useState(true);
  const changeStatus = (newStatus: boolean) => {
    setReadyToJoin(newStatus);
  };

  const changeActiveCall = (newStatus: boolean) => {
    setActiveCall(newStatus);
  };

  useEffect(() => {
    if (location.pathname == "/landing-video-call") {
      console.log("Initialize");
      setActiveCall(true);
      setReadyToJoin(false);
      setMicActive(true);
      setCameraActive(true);
    }
  }, [location]);

  return (
    <IonPage>
      {activeCall ? (
        <>
          {!readyToJoin ? (
            <TopHeader pageName="Video Call Preview" />
          ) : (
            <TopHeader pageName="Video Consultation" />
          )}
        </>
      ) : (
        <TopHeader pageName="Rejoin Meeting" />
      )}
      <IonContent className="ion-padding">
        {activeCall ? (
          <>
            {!readyToJoin ? (
              <VideoCallPreview
                constraints={CONSTRAINTS}
                status={readyToJoin}
                changeStatus={changeStatus}
                micActive={micActive}
                cameraActive={cameraActive}
                setMicActive={setMicActive}
                setCameraActive={setCameraActive}
              />
            ) : (
              <VideoCall
                constraints={CONSTRAINTS}
                status={readyToJoin}
                changeStatus={changeStatus}
                activeCall={activeCall}
                changeActiveCall={changeActiveCall}
                micActive={micActive}
                cameraActive={cameraActive}
                setMicActive={setMicActive}
                setCameraActive={setCameraActive}
                CONSTRAINTS_ONLY_AUDIO={CONSTRAINTS_ONLY_AUDIO}
                CONSTRAINTS_ONLY_VIDEO={CONSTRAINTS_ONLY_VIDEO}
              />
            )}
          </>
        ) : (
          // *This component meant to handle when user got disconnected because of the internet connection
          <RejoinMeetingComponent
            activeCall={activeCall}
            rejoinOnClick={changeActiveCall}
            status={readyToJoin}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default LandingPageVideoCall;
