import { Button } from "../../ui/core/Buttons";
import { TopHeader } from "../../ui/layouts/Headers";
import { IonContent, IonPage } from "@ionic/react";
import AgreementCheckbox from "../../ui/registration/agreement-checkbox";
import { MediumText } from "../../ui/core/Text";
import { Link, useHistory } from "react-router-dom";
import FormInput from "../../ui/core/FormInput";
import { useState } from "react";
import { Storage } from "@capacitor/storage";
import useValidation from "../../../lib/hooks/useValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalDetails from "../../../lib/hooks/useLocalDetails";
import { Urql } from "../../../urql/urql";
import { checkUserExistsQuery } from "../../../urql/queries/user";
import { createEntityMutation } from "../../../urql/mutations/entity";
import { createUserMutation } from "../../../urql/mutations/user";
import { generateTokenMutation } from "../../../urql/mutations/token";
import { useRecoilState } from "recoil";
import { accessToken } from "../../../recoil/atoms";

const EmailSignUp = () => {
  const history = useHistory();
  const { clearLocalDetails } = useLocalDetails();
  const { validateEmail, validatePassword, validatePhone } = useValidation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showValidateError, setShowValidateError] = useState(false);
  const [userExistsError, setUserExistsError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [access_token, setAccessToken] = useRecoilState(accessToken);

  const handleSignupClick = async () => {
    try {
      const guestTokenInput = {
        username: process.env.NEXT_PUBLIC_GUEST_USERNAME,
        password: process.env.NEXT_PUBLIC_GUEST_PASSWORD,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        tenantId: process.env.NEXT_PUBLIC_TENANT_ID,
      };
      const guestTokenRes = await Urql.mutation(
        generateTokenMutation,
        guestTokenInput
      );
      localStorage.setItem(
        "accessToken",
        guestTokenRes.data.generateAccessToken.access_token
      );
      const res = await Urql.query(checkUserExistsQuery, { userName: email });
      if (res.data.userExists) {
        toast.error("User already exists", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.clear();
      } else {
        const entityInfo = {
          archetypeId: process.env.NEXT_PUBLIC_PATIENT_ARCHETYPE_ID,
          tenantId: process.env.NEXT_PUBLIC_TENANT_ID,
          name: email,
        };
        const entityRes = await Urql.mutation(createEntityMutation, entityInfo);
        const userInput = {
          userName: email.toLowerCase(),
          email: email,
          password: password,
          phoneNumber: phoneNumber,
          entityId: entityRes.data.createEntity.id,
          attachedRoleIds: [process.env.NEXT_PUBLIC_PATIENT_ROLE_ID],
        };
        const userRes = await Urql.mutation(createUserMutation, userInput);
        await Storage.set({
          key: "loggedUser",
          value: JSON.stringify([userRes.data.createUser]),
        });
        const accessTokenInput = {
          username: email.toLowerCase(),
          password: password,
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
          tenantId: process.env.NEXT_PUBLIC_TENANT_ID,
        };
        const accessTokenRes = await Urql.mutation(
          generateTokenMutation,
          accessTokenInput
        );
        setAccessToken(accessTokenRes.data.generateAccessToken.access_token);
        localStorage.setItem(
          "accessToken",
          JSON.stringify(accessTokenRes.data.generateAccessToken.access_token)
        );
        history.push(`/sign-up/verify-phone/${phoneNumber}`);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.clear();
    }
  };

  const validateFields = () => {
    setUserExistsError("");
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      validatePhone(phoneNumber)
    )
      setShowValidateError(false);
    else setShowValidateError(true);
    return (
      validateEmail(email) &&
      validatePassword(password) &&
      validatePhone(phoneNumber)
    );
  };

  return (
    <IonPage>
      <TopHeader pageName={"Sign Up"} back={true} />
      <IonContent>
        <div className="flex flex-col">
          <div className="flex flex-col w-full mt-10 px-8 justify-center items-center font-general">
            <div className="p-1 font-medium w-full">
              Enter your phone number
            </div>
            <div className="pt-1 pb-2 w-full">
              <FormInput
                inputType="number"
                inputState={phoneNumber}
                setInputState={setPhoneNumber}
                placeholder="Phone no."
                noShadow
                showError={showValidateError}
                errorText="Enter a valid phone number!"
                validateFunction={validatePhone}
              />
            </div>
            <div className="p-1 font-medium w-full">Enter your email</div>
            <div className="pt-1 pb-2 w-full">
              <FormInput
                inputState={email}
                setInputState={setEmail}
                placeholder="Email"
                noShadow
                showError={showValidateError}
                errorText="Enter a valid email!"
                validateFunction={validateEmail}
              />
            </div>
            <div className="p-1 font-medium w-full">Enter a password</div>
            <div className="pt-1 pb-2 w-full">
              <FormInput
                inputState={password}
                setInputState={setPassword}
                placeholder="Password"
                inputType={"password"}
                noShadow
                showError={showValidateError}
                errorText="Password should be between 6 to 20 characters with at least one numeric digit, one special character, one uppercase and one lowercase letter."
                validateFunction={validatePassword}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>
            <div className="flex flex-row items-center">
              <Button
                classes="w-[18rem] text-md mt-12 font-title !bg-blue-500 shadow-md"
                handleClick={async () => {
                  if (validateFields()) {
                    await clearLocalDetails();
                    handleSignupClick();
                  } else {
                    console.log("Invalid");
                  }
                }}
              >
                Sign Up
              </Button>
            </div>
            {userExistsError && (
              <div className="text-error my-1">{userExistsError}</div>
            )}
          </div>
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
      <ToastContainer />
    </IonPage>
  );
};

export default EmailSignUp;
