import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import Consult from "./pages/consult";
import Doctors from "./pages/doctors";
import Packages from "./pages/packages";
import Profile from "./pages/profile";
import Home from "./pages/home";
import PackageDetails from "./pages/package/PackageDetails";
import Appointments from "./pages/appointments";
import MyPractitioners from "./pages/my-practitioners";
import UserProfile from "./pages/user-profile";
import AppointmentPage from "./pages/appointment";
import ResultDetails from "./pages/medical-records/lab-results/details";
import RadiologyResultDetails from "./pages/medical-records/radiology/details";
import Doctor from "./pages/doctor";
import LoginPage from "./pages/login";
import EmailSignup from "./pages/sign-up";
import ForgotPassword from "./pages/forgot-password";
import ChangePassword from "./pages/change-password";
import Settings from "./pages/settings";
import Orders from "./pages/orders";
import BookOfflineAppointment from "./pages/doctors/book-appointment/BookOfflineAppointment";
import GraphQL from "./pages/test-gql";
import { createClient, Provider } from "urql";
import NavLayout from "./ui/layouts/NavLayout";
import RescheduleAppointment from "./pages/appointment/reschedule/RescheduleAppointment";
import ArticlePage from "./pages/articles";
import Onboarding from "./pages/onboarding";
import ConsultGP from "./pages/consult-gp";
import CategoryName from "./pages/articles/categories";
import ArticlePageSlug from "./pages/articles/slug";
import OrderDetailsPage from "./pages/order";
import PreAppointmentPage from "./pages/pre-appointment";
import PackageSummary from "./pages/package/summary";
import MedicalRecordsPage from "./pages/medical-records";
import LabResults from "./pages/medical-records/lab-results";
import Radiology from "./pages/medical-records/radiology";
import PersonalRecords from "./pages/medical-records/personal-records";
import Immunization from "./pages/medical-records/immunization";
import EndedCall from "./pages/online-consultation/ended-call";
import OrderConfirmationPage from "./pages/order/confirmation";
import OrderFailurePage from "./pages/order/failure";
import VerifyPhone from "./pages/sign-up/verify-phone";
import PhoneVerified from "./pages/sign-up/phone-verified";
import LandingPageVideoCall from "./pages/online-consultation/landing-page";
import PackageAppointment from "./pages/order/package-appointment/index";
import SelectDoctor from "./pages/order/package-appointment/select-doctor";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessToken } from "../recoil/atoms";

setupIonicReact();

defineCustomElements(window);

const AppShell = () => {
  const [access_token, setAccessToken] = useRecoilState(accessToken);

  useEffect(() => {
    const getTokens = () => {
      if (access_token === null) {
        const l_access_token = localStorage.getItem("accessToken");
        setAccessToken(l_access_token);
        return l_access_token;
      }
      return access_token;
    };
    getTokens();
  }, [access_token]);

  const client = createClient({
    url: process.env.NEXT_PUBLIC_GQL_ENDPOINT,
    fetchOptions: () => {
      return {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      };
    },
  });

  const renderAuthRoutes = () => {
    return (
      <Switch>
        <Route exact path="/home" render={() => <Home />} />
        <Route path="/consult" render={() => <Consult />} />
        <Route path="/packages" render={() => <Packages />} />
        <Route exact path="/doctors" render={() => <Doctors />} />
        <Route path="/doctor/:id" render={() => <Doctor />} />
        <Route
          path="/doctors/book-appointment/:id"
          render={() => <BookOfflineAppointment />}
        />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/package/:id" render={() => <PackageDetails />} />
        <Route exact path="/articles" render={() => <ArticlePage />} />
        <Route
          exact
          path="/articles/:slug"
          render={() => <ArticlePageSlug />}
        />
        <Route
          exact
          path="/articles/categories/:category"
          render={() => <CategoryName />}
        />
        <Route
          exact
          path="/appointment/:id"
          render={() => <AppointmentPage />}
        />
        <Route path="/appointments" render={() => <Appointments />} />
        <Route
          path="/appointment/reschedule/:id"
          render={() => <RescheduleAppointment />}
        />
        <Route path="/pre-appointment" render={() => <PreAppointmentPage />} />
        <Route path="/my-practitioners" render={() => <MyPractitioners />} />
        <Route path="/user-profile" render={() => <UserProfile />} />
        <Route
          path="/lab-results/details/:id"
          render={() => <ResultDetails />}
        />

        <Route
          path="/sign-up/verify-phone/:phone"
          render={() => <VerifyPhone />}
        />
        <Route
          path="/sign-up/phone-verified"
          render={() => <PhoneVerified />}
        />
        <Route path="/onboarding/:startScreen" render={() => <Onboarding />} />
        <Route
          path="/radiology/details/:id"
          render={() => <RadiologyResultDetails />}
        />
        <Route
          path="/landing-video-call"
          render={() => <LandingPageVideoCall />}
        />
        <Route path="/ended-call" render={() => <EndedCall />} />

        <Route path="/change-password" render={() => <ChangePassword />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/orders" render={() => <Orders />} />
        <Route exact path="/order/:id" render={() => <OrderDetailsPage />} />
        <Route
          exact
          path="/order/package-appointment/:order_id"
          render={() => <PackageAppointment />}
        />
        <Route
          exact
          path="/order/package-appointment/select-doctor/:order_id"
          render={() => <SelectDoctor />}
        />
        <Route path="/consult-gp" render={() => <ConsultGP />} />
        <Route path="/test-gql" render={() => <GraphQL />} />
        <Route
          exact
          path="/medical-records"
          render={() => <MedicalRecordsPage />}
        />
        <Route path="/medical-records/lab" render={() => <LabResults />} />
        <Route path="/medical-records/radiology" render={() => <Radiology />} />
        <Route path="/package-summary" render={() => <PackageSummary />} />
        <Route
          path="/order-confirmation"
          render={() => <OrderConfirmationPage />}
        />
        <Route path="/order-failure" render={() => <OrderFailurePage />} />
        <Route
          path="/medical-records/personal"
          render={() => <PersonalRecords />}
        />
        <Route
          path="/medical-records/immunization"
          render={() => <Immunization />}
        />
        <Route
          path="/sign-up/verify-phone/:phone"
          render={() => <VerifyPhone />}
        />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    );
  };

  const renderNonAuthRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginPage />} />
        <Route path="/sign-up" render={() => <EmailSignup />} />
        <Route path="/forgot-password" render={() => <ForgotPassword />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    );
  };

  return (
    <IonApp>
      <IonReactRouter>
        <NavLayout />
        <Provider value={client}>
          <IonSplitPane contentId="main">
            <IonRouterOutlet id="main">
              {access_token ? renderAuthRoutes() : renderNonAuthRoutes()}
            </IonRouterOutlet>
          </IonSplitPane>
        </Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
