import { RecoilRoot } from "recoil";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { SplashScreen } from "@capacitor/splash-screen";

const App = dynamic(() => import("../components/AppShell"), {
  ssr: false,
});

export default function Index() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
