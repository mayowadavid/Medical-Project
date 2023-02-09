import { Button } from "../core/Buttons";
import { Link } from "react-router-dom";
import { SmallText, SubHeadingText } from "../core/Text";
import FormInput from "../core/FormInput";
import { Dispatch, SetStateAction, useState, useCallback } from "react";
import useValidation from "../../../lib/hooks/useValidation";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Storage } from "@capacitor/storage";
import useLocalDetails from "../../../lib/hooks/useLocalDetails";
import { generateTokenMutation } from "../../../urql/mutations/token";
import { getCurrentUserQuery } from "../../../urql/queries/user";
import { getEntityByIdQuery } from "../../../urql/queries/entity";
import { Urql } from "../../../urql/urql";
import { useRecoilState } from "recoil";
import { accessToken } from "../../../recoil/atoms";
interface EmailLoginProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}
const EmailLogin = ({
  email,
  setEmail,
  password,
  setPassword,
}: EmailLoginProps) => {
  const {
    getAddresses,
    getCountry,
    getFirstname,
    getGender,
    setProfileDetails,
    setAddressDetails,
    setAllergyDetails,
    setCurrMedicationDetails,
    setGenderDetails,
    setKinDetails,
    setMedicalDetails,
    setContactDetails,
    setIdentityDetails,
  } = useLocalDetails();
  const history = useHistory();
  const { validateEmail, validateEmpty } = useValidation();
  const [showValidateError, setShowValidateError] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [access_token, setAccessToken] = useRecoilState(accessToken);
  const updateLocalEntityData = async (data: any) => {
    if (data?.getEntityById) {
      const jsonData = JSON.parse(data.getEntityById.valueAsJsonString);
      // update profile details in local storage
      if (
        jsonData &&
        jsonData.salutation &&
        jsonData.firstName &&
        jsonData.lastName &&
        jsonData.birthDate
      ) {
        await setProfileDetails(
          jsonData.salutation,
          jsonData.firstName,
          jsonData.lastName,
          jsonData.birthDate
        );
      }
      // update gender in local storage
      if (jsonData && jsonData.gender) {
        await setGenderDetails(jsonData.gender);
      }
      // update allergies in local storage
      if (
        jsonData &&
        jsonData.allergies &&
        jsonData.allergies.drug_allergies &&
        jsonData.allergies.food_allergies
      ) {
        await setAllergyDetails(jsonData.allergies);
      }
      // update medical history in local storage
      if (jsonData && jsonData.medical_history) {
        await setMedicalDetails(jsonData.medical_history);
      }
      // update current medication in local storage
      if (jsonData && jsonData.current_medication) {
        await setCurrMedicationDetails(jsonData.current_medication);
      }
      if (data?.getEntityById?.addresses) {
        await setAddressDetails(data.getEntityById.addresses);
      }
      if (data?.getEntityById?.contacts) {
        await setContactDetails(data.getEntityById.contacts);
      }
      if (data?.getEntityById?.identifiers) {
        setIdentityDetails(data.getEntityById.identifiers);
      }
    }
  };

  const fetchEntityData = async () => {
    /// get entity id from localstorage user data
    const { value: userData } = await Storage.get({ key: "loggedUser" });
    const user = JSON.parse(userData)[0];
    if (userData && JSON.parse(userData)[0]?.entity?.id) {
      const entityId = user.entity.id;
      const entityRes = await Urql.query(getEntityByIdQuery, {
        id: entityId,
      });
      await updateLocalEntityData(entityRes.data);
      await getStartingScreen();
    } else {
      // no user logged in
      history.replace("/");
    }
  };

  const getStartingScreen = useCallback(async () => {
    const fname = await getFirstname();
    if (fname == "") {
      console.log("to 0");
      history.replace("/onboarding/0");
    } else {
      const gender = await getGender();
      if (gender == "") {
        console.log("to 1");
        history.replace("/onboarding/1");
      } else {
        const country = await getCountry();
        if (country == "Select country") {
          console.log("to 2");
          history.replace("/onboarding/2");
        } else {
          const address = await getAddresses();
          if (address.length <= 0) {
            console.log("to 3");
            history.replace("/onboarding/3");
          } else {
            console.log("to home");
            history.replace("/home");
          }
        }
      }
    }
  }, [getFirstname, getGender, getCountry, getAddresses]);

  const validateFields = () => {
    console.log("Validating...");
    if (validateEmail(email) && validateEmpty(password))
      setShowValidateError(false);
    else setShowValidateError(true);
    return validateEmail(email) && validateEmpty(password);
  };

  const updateLocalUserData = async (userRes: any) => {
    if (userRes.error) {
      toast.error(userRes.error.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (userRes?.data?.me) {
      await Storage.set({
        key: "loggedUser",
        value: JSON.stringify([userRes.data.me]),
      });
      fetchEntityData();
    }
  };
  const handleLoginClick = async () => {
    const userInfo = {
      username: email,
      password: password,
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      tenantId: process.env.NEXT_PUBLIC_TENANT_ID,
    };
    const tokenRes = await Urql.mutation(generateTokenMutation, userInfo);
    if (tokenRes.error) {
      toast.error(tokenRes.error.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      localStorage.setItem(
        "accessToken",
        tokenRes.data.generateAccessToken.access_token
      );
      setAccessToken(tokenRes.data.generateAccessToken.access_token);
      const userRes = await Urql.query(getCurrentUserQuery);
      updateLocalUserData(userRes);
    }
  };

  return (
    <div className="h-full font-general flex flex-col items-center justify-center w-full px-10">
      <SubHeadingText classes="self-start text-left text-slate-500 font-title mx-3 mb-2">
        Sign In
      </SubHeadingText>
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
      <div className="pt-1 pb-2 w-full">
        <FormInput
          inputState={password}
          setInputState={setPassword}
          placeholder="Password"
          inputType={"password"}
          noShadow
          showError={showValidateError}
          errorText="Enter a valid password!"
          validateFunction={validateEmpty}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>
      <div className="flex flex-col justify-end self-end text-right">
        <Link to="/forgot-password">
          <SmallText classes="text-center text-error font-title italic mb-4">
            Forgot your password?
          </SmallText>
        </Link>
      </div>
      <div className="flex flex-row w-full justify-center items-center">
        <Button
          classes="w-[18rem] font-title shadow-md !bg-blue-500"
          handleClick={() => {
            if (validateFields()) {
              handleLoginClick();
            }
          }}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default EmailLogin;
