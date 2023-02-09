import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.myhealthcarecollective.com",
  appName: "MyHC Patient Portal",
  webDir: "out",
  bundledWebRuntime: false,
  // ios: {
  //   contentInset: "always",
  // },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: "#FFFFFF",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
