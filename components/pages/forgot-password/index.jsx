import { Button } from "../../ui/core/Buttons";
import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";
import InputField from "../../ui/registration/input-field";
import { IonContent, IonPage } from "@ionic/react";
import { MediumText } from "../../ui/core/Text";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <IonPage>
      <div className="flex flex-col w-full h-screen bg-gradient-to-b from-secondary-5 to-white">
        <TopHeader pageName={"Forgot your password?"} back={true} />
        <IonContent>
          <Container>
            <div className="flex w-full justify-center">
              <img
                className="object-center mt-8 w-1/2"
                src="/assets/images/logo/logo_primary.svg"
                alt="logo"
              />
            </div>

            <form className="flex flex-col mt-10 justify-center items-center">
              <InputField id="email" placeholder="Email" type="email" />
              <div className="flex flex-row justify-center items-center">
                <Button
                  classes="w-[18rem] text-md font-title bg-blue-500 shadow-md"
                  href="/home"
                >
                  Retrieve Password
                </Button>
              </div>
            </form>
            <div className="flex flex-col mx-3 px-8">
              <MediumText classes="text-left text-slate-500 font-general mt-12 italic">
                New to My Healthcare Collective?
              </MediumText>
              <Link to="/email-sign-up">
                <MediumText classes="mt-1 text-left text-blue-500 font-title">
                  Sign Up
                </MediumText>
              </Link>
            </div>
          </Container>
        </IonContent>
      </div>
    </IonPage>
  );
};

export default ForgotPassword;
