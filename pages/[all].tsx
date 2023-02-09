import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";

const App = dynamic(() => import("../components/AppShell"), {
  ssr: false,
});

export default function Index() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
