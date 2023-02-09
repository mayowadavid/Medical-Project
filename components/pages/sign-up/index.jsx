import { Button } from "../../ui/core/Buttons";
import { TopHeader } from "../../ui/layouts/Headers";
import { IonContent, IonPage } from "@ionic/react";
import AgreementCheckbox from "../../ui/registration/agreement-checkbox";
import { MediumText } from "../../ui/core/Text";
import { Link } from "react-router-dom";
import FormInput from "../../ui/core/FormInput";
import { useState } from "react";
import { Storage } from "@capacitor/storage";

const EmailSignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setContactDetails = async () => {
    const { value } = await Storage.get({ key: "contacts" });
    const contact = [
      { id: 1, type: "phone", value: phoneNumber },
      { id: 2, type: "email", value: email },
    ];
    if (value == null) {
      await Storage.set({
        key: "contacts",
        value: JSON.stringify([...contact]),
      });
    } else {
      if (
        JSON.parse(value).find(
          (c) => c.type == "phone" && c.value == phoneNumber
        )
      ) {
      }
    }
    const { value: contacts } = await Storage.get({ key: "contacts" });
    console.log("Contacts : ", JSON.parse(contacts));
  };
  return (
    <IonPage>
      <TopHeader pageName={"Sign Up"} back={true} />
      <IonContent>
        <div className="flex flex-col">
          <form
            className="flex flex-col w-full mt-10 px-8 justify-center items-center font-general"
            action="/"
            method="POST"
          >
            <div className="p-1 font-medium w-full">
              Enter your phone number
            </div>
            <div className="pt-1 pb-2 w-full">
              <FormInput
                inputState={phoneNumber}
                setInputState={setPhoneNumber}
                placeholder="Phone no."
              />
            </div>
            <div className="p-1 font-medium w-full">Enter your email</div>
            <div className="pt-1 pb-2 w-full">
              <FormInput
                inputState={email}
                setInputState={setEmail}
                placeholder="Email"
              />
            </div>
            <div className="p-1 font-medium w-full">Enter a password</div>
            <div className="pt-1 pb-2 w-full">
              <FormInput
                inputState={password}
                setInputState={setPassword}
                placeholder="Password"
                inputType="password"
              />
            </div>
            <div className="flex flex-row items-center">
              {phoneNumber == "" || email == "" || password == "" ? (
                <Button
                  classes="w-[18rem] text-md mt-12 font-title !bg-blue-500/40 shadow-md"
                  handleClick={() => console.log("Disabled btn!")}
                  disabled
                >
                  Sign Up
                </Button>
              ) : (
                <div
                  onClick={() => {
                    setContactDetails();
                  }}
                >
                  <Button
                    classes="w-[18rem] text-md mt-12 font-title !bg-blue-500 shadow-md"
                    href={`/sign-up/verify-phone/${phoneNumber}`}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </form>
          <div className="flex flex-row w-full justify-center items-center mt-4">
            <AgreementCheckbox />
          </div>
          <div className="flex flex-col justify-center items-center mt-12 px-10">
            <MediumText classes="text-left text-slate-500 font-general italic">
              Already have an account?
            </MediumText>
            <Link to="/">
              <MediumText classes="mt-1 text-left text-blue-500 font-title">
                Sign In
              </MediumText>
            </Link>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EmailSignUp;
